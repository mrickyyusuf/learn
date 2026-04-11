#include <iostream>

using namespace std;

int main()
{
    float a, b, result;
    char aritmethica

    cout << "Wellcome to my calculator project" << endl;

    cout << "input first number: ";
    cin >> a;
    cout >> "Choose operator +, -, *, /: ";
    cin >> aritmethica;
    cout << "Input second number: ";
    cin >> b;

    cout << "\nRESULT = ";
    cout << a << aritmethica << b;

    if (aritmethica == '+') {
        result = a + b;
    }else if (aritmethica == '-') {
        result = a - b;
    }else if (aritmethica == '*') {
        result = a * b;
    }else {
        cout << "Your operator is wrong" << endl;
    }

    cout << "=" << result << endl;

    return 0;
}
