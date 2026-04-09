/*6. Implement Abstract classes in your program*/


#include<iostream>
using namespace std;


class Shape {
public:
    // pure virtual function
    virtual void draw() = 0;
};


class Circle : public Shape {
public:
    void draw() {
        cout << "Drawing Circle" << endl;
    }
};


class Square : public Shape {
public:
    void draw() {
        cout << "Drawing Square" << endl;
    }
};

int main() {
    Shape *s;   

    Circle c;
    Square sq;

    s = &c;
    s->draw();

    s = &sq;
    s->draw();

    return 0;
}