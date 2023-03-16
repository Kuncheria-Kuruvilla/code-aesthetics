bool contains(int array[10], int value)
// 1st Level
{
    for (int number : array)
    // 2nd Level
    {
        if (number == value)
        // 3rd Level
        {
            return true;
        }
    }
    return false;
}