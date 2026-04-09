#include<iostream> 
using namespace  std;

int main(){
int a=5;
int b=10;

if(a<5 && b<10)
{
 cout<<"if both are true then output is true"<<endl;
}
else{cout<<"if one condition is true and anothe is false the output is false"<<endl;}

if( a<10 || b<5)
{
    cout<< " if one of the two conditions is true the output is true"<<endl;
}

if (!(a>5))
{
    cout<<"if condition is true it gives output fasle"<<endl;
}
    return 0;
}