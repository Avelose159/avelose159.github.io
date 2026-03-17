---
title: "프로그래머스 C++ 코딩 1일차"
pubDate: 2026-03-02
description: "프로그래머스 C++ 코딩 1일차"
category: "CODING"
author: "avelose159"
---
#### 1. 문자열 출력하기
문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.
```cpp
#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str;
    cin >> str;
    cout << str;

    return 0;
}
```
---
<br>

#### 2. a와 b 출력하기
정수 a와 b가 주어집니다. 각 수를 입력받아 입출력 예와 같은 형식으로 출력하는 코드를 작성해 보세요.
```cpp
#include <iostream>

using namespace std;

int main(void) {
    int a;
    int b;
    cin >> a >> b;
    cout << "a = " << a << endl;
    cout << "b = " << b << endl;
    return 0;
}
```
---
<br>

#### 3. 문자열 반복해서 출력하기
문자열 str과 정수 n이 주어집니다. str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.
```cpp
#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str;
    int n;
    cin >> str >> n;
    while(n>0){
        cout << str;
        n--;
    }
    return 0;
}
```
---
<br>

#### 4. 대소문자 바꿔서 출력하기
영어 알파벳으로 이루어진 문자열 str이 주어집니다. 각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
```cpp
#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str;
    cin >> str;
    for(int i=0; i<str.length(); i++){
        //소문자 범위에 있는 문자인 경우 - 32
        if(str[i] >= 'a' && str[i] <= 'z'){
            str[i] -= 32;
        }
        //대문자인 경우 + 32
        else{
            str[i] += 32;
        }
    }
    cout << str;
    return 0;
}
```
---
<br>

#### 5. 특수문자 출력하기
다음과 같이 출력하도록 코드를 작성해 주세요. ```[!@#$%^&*(\'"<>?:;]```
```cpp
#include <iostream>

using namespace std;

int main(void) {
    cout << "!@#$%^&*(\\'\"<>?:\;" << endl;
    return 0;
}
```
