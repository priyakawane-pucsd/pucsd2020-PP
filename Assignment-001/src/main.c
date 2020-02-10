#include <stdio.h>
#include <stdlib.h>
#include "../include/function.h"


int main(void)
{
	int a,b,result;
	char op;
	printf("Enter An Expression:");
	scanf("%d%c%d",&a,&op,&b);
	switch(op)
    {
        case '+':
            result = add(a,op,b);
           break;
        case '-':
            result = sub(a,op,b);
          break;
        case '*':
            result = mul(a,op,b);
            break;
        case '/':
            result = divi(a,op,b);
            break;  
		case '%':
			result = percent(a,op,b); 
    }
	printf("Result = %d\n", result);
	return 0;
 }

