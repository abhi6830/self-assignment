/*7. Using virtual and pure virtual functions implement hierarchy of computer printers*/



#include<iostream>
using namespace std;

class Printer {
public:
    // pure virtual function
    virtual void print() = 0;
};

class Inkjet : public Printer {
public:
    void print() {
        cout << "Printing using Inkjet Printer" << endl;
    }
};

class Laser : public Printer {
public:
    void print() {
        cout << "Printing using Laser Printer" << endl;
    }
};

int main() {
    Printer *p;  

    Inkjet i;
    Laser l;

    p = &i;
    p->print();

    p = &l;
    p->print();

    return 0;
}