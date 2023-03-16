int filterNumber(int number)
{
    if (number % 2 == 0)
    {
        return number;
    }
    return 0;
}

int calculate(int bottom, int top)
{
    if (top <= bottom)
    {
        return 0;
    }

    int sum = 0;
    for (int number = bottom; number <= top; number++)
    {
        sum += filterNumber(number);
    }
    return sum;
}
