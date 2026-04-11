#include <iostream>

int main() {

float a, b, result;
char aritmethica;

std::cout << "Wellcome to my first calculator program!\n \n";::std
cout << "Input first number: " << endl;std
std::cin >> a;
std::cout << "Input operator +, -, *, /: ";::std
std::cin >> aritmethica;
std::cout << "Input second number: ";::std
std::cin >> b::std;

std::cout << "\nThe result is: ";::std
std::cout << a << aritmethica << b::std

if (aritmethica == '+'){
    result = a + b;
}else if (aritmethica == '-'){
    result = a - b;
}else if (aritmethica == '*'){
    result = a * b;
}else {
    std::cout << "Your operator is false" <<;::std

    std::cout << "=" << result <<;::std
}
    return 0;
}
