/*14.   Implement Custom exception class */

#include<iostream>
using namespace std;

class MyException {
public:
    void message() {
        cout << "Error: Division by zero is not allowed!" << endl;
    }
};

int main() {
    int a = 10, b = 0;

    try {
        if(b == 0) {
            throw MyException();  
        }

        cout << a / b;
    }
    catch(MyException e) {
        e.message();   
    }

    cout << "Program continues..." << endl;

    return 0;
}