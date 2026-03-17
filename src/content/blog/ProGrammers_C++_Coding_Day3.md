---
title: "프로그래머스 C++ 코딩 3일차"
pubDate: 2026-03-04
description: "프로그래머스 C++ 코딩 3일차"
category: "CODING"
author: "avelose159"
---
#### 1. 문자열 섞기
##### 길이가 같은 두 문자열 str1과 str2가 주어집니다. 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string str1, string str2) {
    string answer = "";
    
    for(int i = 0; i < str1.size(); ++i) {
        answer += str1[i];
        answer += str2[i];
    }
    
    return answer;
}
```
#### 2. 문자 리스트를 문자열로 변환하기
##### 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(vector<string> arr) {
    string answer = "";
    for(int i=0; i<arr.size(); i++){
        answer = answer+arr[i];
    }
    return answer;
}
```
#### 3. 문자열 곱하기
##### 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string my_string, int k) {
    string answer = "";
    for(int i=0; i<k; i++){
        answer = answer+my_string;
    }
    return answer;
}
```
#### 4. 더 크게 합치기
##### 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
```12 ⊕ 3 = 123```
```3 ⊕ 12 = 312```
##### 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요. 
##### (단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.)
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int a, int b) {
    int answer = 0;
    string ab = to_string(a) + to_string(b);
    string ba = to_string(b) + to_string(a);
    if(ab>ba) answer = stoi(ab);
    else answer = stoi(ba);
    return answer;
}
```
#### 5. 두 수의 연산값 비교하기
##### 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.
```12 ⊕ 3 = 123```
```3 ⊕ 12 = 312```
##### 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.
##### (단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.)
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int a, int b) {
    int answer = 0;
    
    string ab = to_string(a) + to_string(b);
    int ba = 2*a*b;
    
    if(stoi(ab) > ba || stoi(ab) == ba) answer = stoi(ab);
    else answer = ba;
    return answer;
}
```
