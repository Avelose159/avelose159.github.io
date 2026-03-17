---
title: "프로그래머스 C++ 코딩 2일차"
pubDate: 2026-03-03
description: "프로그래머스 C++ 코딩 2일차"
category: "CODING"
author: "avelose159"
---
#### 1. 덧셈식 출력하기
##### 두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요. 
```a + b = c```
```cpp
#include <iostream>

using namespace std;

int main(void) {
    int a;
    int b;
    cin >> a >> b;
    cout << a << " + " << b << " = " << a+b << endl;
    return 0;
}
```
#### 2. 문자열 붙여서 출력하기
##### 두 개의 문자열 str1, str2가 공백으로 구분되어 입력으로 주어집니다. 입출력 예와 같이 str1과 str2을 이어서 출력하는 코드를 작성해 보세요.
##### 입력
```apple pen```
##### 출력
```applepen```
```cpp
#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str1, str2;
    cin >> str1 >> str2;
    cout << str1+str2 << endl;
    return 0;
}
```
#### 3. 문자열 돌리기
##### 문자열 str이 주어집니다. 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.
```cpp
#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str;
    cin >> str;
    for(int i=0; i<str.length(); i++){
        cout << str[i] << endl;
    }
    return 0;
}
```
#### 4. 홀짝 구분하기
##### 자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.
```cpp
#include <iostream>

using namespace std;

int main(void) {
    int n;
    cin >> n;
    if(n%2==0){
        cout << n << " is even" << endl;
    } else {
        cout << n << " is odd" << endl;
    }
    return 0;
}
```
#### 5. 문자열 겹쳐쓰기
##### 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string my_string, string overwrite_string, int s) {
    string answer = "";
    for(int i=0; i<overwrite_string.length(); i++){
        my_string[s+i] = overwrite_string[i];
    }
    answer = my_string;
    return answer;
}
```
