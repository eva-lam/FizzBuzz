public class FizzBuzzer
{
    public static string Evaluate(int number)
    {
        if (number % 15 == 0)
        {
            return "fizzbuzz";
        }
        else if (number % 3 == 0)
        {
            return "fizz";
        }
        else if (number % 5 == 0)
        {
            return "buzz";
        }
        else
        {
            return number.ToString();
        }
    }
}
//what if I put number %3 first? how would that change 