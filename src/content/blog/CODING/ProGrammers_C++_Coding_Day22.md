---
title: "프로그래머스 C++ 코딩 22일차"
pubDate: 2026-03-30
description: "프로그래머스 C++ 코딩 22일차"
category: "CODING"
author: "avelose159"
---
#### 1. 0 떼기
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string n_str) {
    int start = 0;
    while(start < n_str.length() && n_str[start] == '0') start++;
    return n_str.substr(start);
}
```
---
<br>

#### 2. 두 수의 합
0 이상의 두 정수가 문자열 a, b로 주어질 때, a + b의 값을 문자열로 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string a, string b) {
    string answer = "";
    int i = a.size() - 1;
    int j = b.size() - 1;
    int carry = 0;

    while (i >= 0 || j >= 0 || carry > 0) {
        int sum = carry;

        if (i >= 0) sum += (a[i--] - '0');
        
        if (j >= 0) sum += (b[j--] - '0');

        answer += (sum % 10) + '0';
        
        carry = sum / 10;
    }

    reverse(answer.begin(), answer.end());
    
    return answer;
}
```
---
<br>

#### 3. 문자열로 변환
정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(int n) {
    return to_string(n);
}
```
---
<br>

#### 4. 문자열 정수의 합
한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string num_str) {
    int answer = 0;
    for(char c : num_str) {
        answer += (c - '0');
    }
    return answer;
}
```
---
<br>

#### 5. 문자열을 정수로 변환하기
숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string n_str) {
    int answer = stoi(n_str);
    return answer;
}
```