#include "m_Curve.h"

M_Curve::M_Curve()
{
	_controlPoints = std::vector<m_Point>();
};

M_Curve::M_Curve(std::vector<m_Point> _controlPoints)
	: _controlPoints(_controlPoints)
{
};

void M_Curve::AddPoint(m_Point point)
{
	if (_controlPoints.size() >= MAX_CONTROL_POINTS_COUNT)
	{
		throw std::out_of_range("Curve has reached max control points count - " + MAX_CONTROL_POINTS_COUNT);
	}

	_controlPoints.push_back(point);
};

const std::vector<m_Point> M_Curve::GetControlPoints()
{
	return _controlPoints;
}

int M_Curve::ControlPointsCount()
{
	return _controlPoints.size();
}

std::vector<m_Point> M_Curve::GetCurvePoints()
{
	if (_controlPoints.size() <= 1)
	{
		return std::vector<m_Point>();
	}

	std::vector<m_Point> curve = std::vector<m_Point>();
	curve.push_back(_controlPoints[0]);

	for (float t = 0; t <= 1; t = t + 0.001f)
	{
		float currentPointX = 0;
		float currentPointY = 0;

		for (unsigned int i = 0; i < _controlPoints.size(); i++)
		{
			int stepPower = _controlPoints.size() - 1;

			currentPointX += C(stepPower, i) * pow(t, i) * pow((1 - t), (stepPower - i)) * _controlPoints[i].x;
			currentPointY += C(stepPower, i) * pow(t, i) * pow((1 - t), (stepPower - i)) * _controlPoints[i].y;
		}

		m_Point point = m_Point(currentPointX, currentPointY);
		curve.push_back(point);
	}

	return curve;
};

void M_Curve::Clear()
{
	_controlPoints.clear();
}

void M_Curve::RemoveLastPoint()
{
	if (!_controlPoints.empty())
	{
		_controlPoints.pop_back();
	}
}