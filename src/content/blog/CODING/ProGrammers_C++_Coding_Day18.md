---
title: "프로그래머스 C++ 코딩 18일차"
pubDate: 2026-03-25
description: "프로그래머스 C++ 코딩 18일차"
category: "CODING"
author: "avelose159"
---
#### 1. x 사이의 개수
문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(string myString) {
    vector<int> answer = {0};
    for(char c : myString) {
        if(c=='x') {
            answer.push_back(0);
        }
        else answer.back()++; 
    }
    return answer;
}
```
---
<br>

#### 2. 문자열 잘라서 정렬하기
문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 빈 문자열은 반환할 배열에 넣지 않습니다.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> solution(string myString) {
    vector<string> answer;
    int index;
    int start = 0;
    
    while((index=myString.find('x',start)) != string::npos) {
        string sub = myString.substr(start, index - start);
        if (!sub.empty()) answer.push_back(sub);
        start = index + 1;
    }
    
    string last = myString.substr(start);
    if (!last.empty()) answer.push_back(last);
    
    sort(answer.begin(), answer.end());
    return answer;
}
```
---
<br>

#### 3. 간단한 식 계산하기
문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>
#include <sstream>

using namespace std;

int solution(string binomial) {
    stringstream ss(binomial);
    int a, b;
    string op;

    ss >> a >> op >> b;

    if (op == "+") return a + b;
    if (op == "-") return a - b;
    if (op == "*") return a * b;
    
    return a / b;
}
```
---
<br>

#### 4. 문자열 바꿔서 찾기
문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string myString, string pat) {
    int answer = 0;
    for(char &c : myString) {
        if(c=='A') c = 'B';
        else c = 'A';
    }
    if(myString.find(pat) != string::npos) answer = 1;
    return answer;
}
```
---
<br>

#### 5. rny_string
'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string rny_string) {
    string answer = "";
    for(char c : rny_string) {
        if(c=='m') answer += "rn";
        else answer += c;
    }
    return answer;
}
```