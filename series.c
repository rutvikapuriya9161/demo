#include<stdio.h>
int main()
{
    int i,n,t1=0,t2=1;
    int next term=t1+t2;
    printf("enter a number of term :");
    scanf("%d",n);

    printf("fibonacci series :L %d,%d,"t1,t2);

    for(i=3;i<=n;i++)
    {
        printf("%d",nextterm);
        t1=t2;
        t2=nextterm;
        nextterm=t1+t2;
    }
}