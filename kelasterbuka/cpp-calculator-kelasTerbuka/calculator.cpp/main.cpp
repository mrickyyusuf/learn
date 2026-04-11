#include <iostream>
using namespace std;

int main()
{
    float a, b, hasil;
    char aritmatika;

    cout << "selamat datang di project kalkulator masucup\n \n";

    cout << "masukan nilai pertama: ";
    cin >> a;
    cout << "pilih operator +,-,*,/: ";
    cin >> aritmatika;
    cout << "masukan nilai kedua: ";
    cin >> b;

    cout << "\nHasil perhitungan: ";
    cout << a << aritmatika << b;

    if (aritmatika == '+'){
        hasil = a + b;
    }else if (aritmatika == '-'){
        hasil = a - b;
    }else if (aritmatika == '*'){
        hasil = a * b;
    }else if (aritmatika == '/'){
        hasil = a / b;
    }else {
        cout << "operator anda salah" << endl;
    }
     cout << "=" << hasil << endl;

    return 0;
}
