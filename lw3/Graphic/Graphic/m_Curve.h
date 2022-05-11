#include <stdexcept>
#include "vector"
#include "m_Point.h"
#include "Utils.h"

static const int POLYGON_POINTS_COUNT = 1000;
static const int MAX_CONTROL_POINTS_COUNT = 20;

class M_Curve
{
public:
	M_Curve();

	M_Curve(std::vector<m_Point> _controlPoints);

	void AddPoint(m_Point point);

	const std::vector<m_Point> GetControlPoints();

	int ControlPointsCount();

	std::vector<m_Point> GetCurvePoints();

	void Clear();

	void RemoveLastPoint();

private:
	std::vector<m_Point> _controlPoints;
};