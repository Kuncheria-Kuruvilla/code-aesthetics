int calculate(int bottom, int top)
{
    if (top > bottom)
    {
        int sum = 0;
        for (int number = bottom; number <= top; number++)
        {
            if (number % 2 == 0)
            {
                sum += number;
            }
        }
        return sum;
    }
    else
    {
        return 0;
    }
}