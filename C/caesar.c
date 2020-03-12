#include <stdio.h>
#include <string.h>
#include <cs50.h>
#include <ctype.h>
#include <stdlib.h> //allows us to use ASCII to integer method.

int main(int argc, string argv[])
{
  int k;
  //#1 validate user input, invalidate input that contains more than 1 element and contains space.
  if(argc==2)
  {
      k = atoi(argv[1]); //converts a string into an integer numerical representation.
      printf("Success\n");
  }
   else
  {
      printf("Usage: ./caesar key");
      return 1;
  }
    char p[30];
    printf("Enter Plaintext: ");

    //get string input.
    scanf("%s",p);

  // Declare variable for end result
  // String (character array), double-quotes. Since its an array, we have to specify     the length (30 in this case.
    char c[100];

    //loop through string input
    int n = strlen(p);

    for (int i=0;i<n;i++)
    {
        //check if it is alphabet and transform lowercase letters
       if(islower(p[i])&& isalpha(p[i]))
       {
           //construct new string
           c[i] = (p[i]-97+k)%26+97; //need to minus 97 to make sure it doesn't exceed the number
       }
       if(isupper(p[i])&& isalpha(p[i]))
       {
           //build on the string
           c[i] = (p[i]-65+k)%26+65;
       }
       if(ispunct(p[i]))
       {
           c[i] = p[i];
       }
     }
     printf("ciphertext: %s\n",c);
     return 0;

}
