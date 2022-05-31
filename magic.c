#include<stdio.h>
int main()
{
    int no,temp,rev=0,digit,sum of digits=0;

    printf("enter a no\n");
    scanf("%d",&no);

    temp=no;

    while(temp>0)
    {
        sum of digits += temp % 10;
        temp=temp/10;
    }
    temp=sum of digits;

    while(temp>0)
    {
        rev=rev*10+temp%10;
        temp=temp/10;
    }
    if(rev*sumofdigits == num)
    printf("magic no\n");
    else
    printf("not a magic no\n");
}