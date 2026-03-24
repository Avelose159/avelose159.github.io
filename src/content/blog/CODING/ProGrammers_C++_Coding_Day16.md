---
title: "프로그래머스 C++ 코딩 16일차"
pubDate: 2026-03-24
description: "프로그래머스 C++ 코딩 16일차"
category: "CODING"
author: "avelose159"
---
#### 1. 대문자로 바꾸기
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <algorithm>

using namespace std;

string solution(string myString) {
    transform(myString.begin(), myString.end(), myString.begin(), ::toupper);
    return myString;
}
```
---
<br>

#### 2. 소문자로 바꾸기
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <algorithm>

using namespace std;

string solution(string myString) {
    transform(myString.begin(), myString.end(), myString.begin(), ::tolower);
    return myString;
}
```
---
<br>

#### 3. 배열에서 문자열 대소문자 변환하기
문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> solution(vector<string> strArr) {
    int i = 0;
    for(auto& s : strArr) {
        if(i%2 == 0) {
            transform(s.begin(), s.end(), s.begin(), ::tolower);
        }
        else transform(s.begin(), s.end(), s.begin(), ::toupper);
        i++;
    }
    return strArr;
}
```
---
<br>

#### 4. A 강조하기
문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string myString) {
    for(char& s : myString) {
        if(s=='a' || s=='A') s = 'A';
        else s = tolower(s);
    }
    return myString;
}
```
---
<br>

#### 5. 특정한 문자를 대문자로 바꾸기
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>

using namespace std;

string solution(string my_string, string alp) {
    char target = alp[0];
    for(char& c : my_string) {
        if(c==target) c = toupper(c);
    }
    return my_string;
}
```