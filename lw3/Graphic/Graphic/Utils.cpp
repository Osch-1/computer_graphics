#include "Utils.h"

int GetFactorialOfN(int n)
{
	if (n < 0)
	{
		return 0;
	}

	if (n == 1 || n == 0)
	{
		return 1;
	}

	return n * GetFactorialOfN(n - 1);
}

double C(int n, int i)
{
	return ((double)GetFactorialOfN(n)) / ((double)(GetFactorialOfN(i) * GetFactorialOfN(n - i)));
}