/*8. Implement diamond problem with real life example*/


#include<iostream>
using namespace std;

class Person {
public:
    string name;

    Person() {
        name = "Asit";
    }
};

class Employee : virtual public Person {
};

class Student : virtual public Person {
};

class Intern : public Employee, public Student {
public:
    void show() {
        cout << "Name: " << name << endl;
    }
};

int main() {
    Intern i;
    i.show();

    return 0;
}