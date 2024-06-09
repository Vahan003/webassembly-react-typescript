#include <cmath>

extern "C"
{
    int adder(int x, int y)
    {
        return x + y;
    }

    int power(int x, int y)
    {
        return pow(x, y);
    }
}

int main()
{
    return 0;
}