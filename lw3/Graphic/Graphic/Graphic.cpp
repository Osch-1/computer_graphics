#include<stdlib.h>
#include<stdio.h>
#include<math.h>
#include<glut.h>
#include<vector>
#include<stdexcept>
#include "m_Curve.h"

int width = 800;
int height = 600;

M_Curve curve = M_Curve();

static void DrawBezier()
{
	glPointSize(1.0);
	glColor3f(1.0, 0.0, 0.0);
	glBegin(GL_LINE_STRIP);

	for (auto& it : curve.GetCurvePoints())
	{
		glVertex2f(it.x, it.y);
	}

	glEnd();
	glFlush();

	return;
}

static void DrawScene()
{
	glClear(GL_COLOR_BUFFER_BIT);
	glColor3f(0, 1.0, 0);
	glPointSize(3.0);
	glBegin(GL_POINTS);

	for (auto& it : curve.GetControlPoints())
	{
		glVertex2f(it.x, it.y);
	}

	glEnd();
	glFlush();

	DrawBezier();
}

static void HandleMouse(int button, int state, int x, int y)
{
	// to prevent trigger on up
	if (state != GLUT_DOWN)
	{
		return;
	}

	if (button == GLUT_LEFT_BUTTON)
	{
		float wx = (2.0 * x) / (float)(width - 1) - 1.0; // due to ortho
		float wy = (2.0 * (height - 1 - y)) / (float)(height - 1) - 1.0; // due to ortho

		if (wx >= 1.0 || wx <= -1.0 || wy >= 1.0 || wy <= -1.0)
		{
			return;
		}

		if (curve.ControlPointsCount() >= MAX_CONTROL_POINTS_COUNT)
			return;

		m_Point newPoint = m_Point(wx, wy);
		curve.AddPoint(newPoint);

		DrawScene();
	}
}

static void HandleKeyboard(unsigned char key, int x, int y)
{
	switch (key)
	{
	case '\x1b':
		exit(0);
		break;
	case 127:
		curve.Clear();
		glutPostRedisplay();
		break;
	case '\b':
		curve.RemoveLastPoint();
		glutPostRedisplay();
		break;
	}
}

static void HandleReshape(int w, int h)
{
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glOrtho(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0);
	glMatrixMode(GL_MODELVIEW);
	glViewport(0, 0, w, h);
	glLoadIdentity();
	width = w;
	height = h;
}

int main(int argc, char** argv)
{
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_RGB);
	glutInitWindowSize(width, height);
	glutInitWindowPosition((glutGet(GLUT_SCREEN_WIDTH) - width) / 2, (glutGet(GLUT_SCREEN_HEIGHT) - height) / 2);
	glutCreateWindow("Bezier");

	glutDisplayFunc(DrawScene);
	glutMouseFunc(HandleMouse);
	glutKeyboardFunc(HandleKeyboard);
	glutReshapeFunc(HandleReshape);
	glClearColor(0, 0, 0, 0);
	glutMainLoop();
}