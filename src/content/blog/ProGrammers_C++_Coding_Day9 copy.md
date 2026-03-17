---
title: "프로그래머스 C++ 코딩 10일차"
pubDate: 2026-03-17
description: "프로그래머스 C++ 코딩 10일차"
category: "CODING"
author: "avelose159"
---
#### 1. 문자열 앞의 n 글자
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string my_string, int n) {
    string answer = my_string.substr(0,n);
    
    return answer;
}
```
---
<br>

#### 2. 접두사인지 확인하기
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string my_string, string is_prefix) {
    int answer = 0;
    vector<string> temp;
    for (int i=0; i<my_string.length(); i++) {
        temp.push_back(my_string.substr(0,i));
    }
    for (int i=0; i<temp.size(); i++) {
        if(temp[i] == is_prefix) {
            answer = 1;
            break;
        }
    }
    return answer;
}
```
---
<br>

#### 3. 문자열 뒤집기
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string my_string, int s, int e) {
    string answer = "";
    int leng = my_string.length() - e;
    reverse(my_string.begin()+s, my_string.end()-leng+1);
    return my_string;
}
```
---
<br>

#### 4. 세로 읽기
문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string my_string, int m, int c) {
    string answer = "";
    for(int i=c-1; i<my_string.length(); i+=m) {
        answer += my_string[i];
    }
    return answer;
}
```
---
<br>

#### 5. QR 코드
두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(int q, int r, string code) {
    string answer = "";
    for (int i=0; i<code.length(); i++) {
        if (i%q == r) {
            answer += code[i];
        }
    }
    return answer;
}
```