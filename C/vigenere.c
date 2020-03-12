#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

// Declare prototypes for functions
int shift(char c);

//error message for wrong user input
string ERROR_MSG = "Usage:/vigenere key\n";
string SUCCESS_MSG = "Success";

int main(int argc, string argv[])
{
    if(argc == 2)
    {
        //calculate length of user input and store it in a variable
        int key_len = strlen(argv[1]);


        //validate user input by looping through the argument
        for ( int i=0; i<key_len; i++)
        {
          //check if everything is alphabet
           int isAlpha = isalpha(argv[1][i]);
           //all is alpha
           int allAlpha
           if(isAlpha !=0 && allAlpha)
           {
               printf("%s", SUCCESS_MSG);
           }
           else{
               //print error message
               printf("%s",ERROR_MSG);
               return 1; //can't proceed with program
           }
        }

        //then proceed to asking for plaintext
          string plaintext = get_string("Enter Plaintext: ");

          //then declare another variable to compare
          string ciphertext = plaintext;

          int plaintext_len = strlen(plaintext);
          //obtain shifted value from key
          //loop through the plaintext
          for ( int i=0, j=0; i<plaintext_len; i++){
              int kvalue = shift(argv[1][j]);
              //check if lowercase
              if(ciphertext[i]>=97 && ciphertext[i]<=122)
              {
                  ciphertext[i]= (ciphertext[i]-97+kvalue)%26 +97;
                   j= (j+1)%plaintext_len;
              }
              if(ciphertext[i]>= 65 && ciphertext[i]<=97)
              {
                  ciphertext[i] = (ciphertext[i]-65+kvalue)%26+65;
                  j = (j+1)%plaintext_len;
              }
          }
        printf("ciphertext: %s",ciphertext);
    }
}

int shift(char c){
    if(c>=65 && c<=90)
    {
        c = c-65;
    }
    if(c>=97 && c<=122)
    {
        c = c-97;
    }
    return c;
}
