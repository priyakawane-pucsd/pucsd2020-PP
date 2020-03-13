#include<stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>
#include "logger.h"
static int session;
FILE *fp;

char *print_time()
{ 
    time_t t;
    t=time(NULL); /* get current calendar time */
    char *timestr = asctime( localtime(&t) );
    timestr[strlen(timestr) - 1] = 0; 
    return  timestr; 
} 


void log_print(char* filename, int line, char *fmt,...)
{
 if(session>0)
 	fp = fopen ("log.txt","a+");
 else
 	fp = fopen ("log.txt","w");

 fprintf(fp,"%s ",print_time());
 fprintf(fp,"[%s][line: %d] ",filename,line);
 fprintf(fp,"%s",fmt);
 
 fputc( '\n', fp );
 session++;
 fclose(fp);
}

