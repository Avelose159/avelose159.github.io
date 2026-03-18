---
title: "프로그래머스 C++ 코딩 4일차"
pubDate: 2026-03-05
description: "프로그래머스 C++ 코딩 4일차"
category: "CODING"
author: "avelose159"
---
#### 1. n의 배수
##### 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int num, int n) {
    int answer = 0;
    if(num % n == 0) answer = 1;
    return answer;
}
```
---
<br>

#### 2. 공배수
##### 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int number, int n, int m) {
    int answer = 0;
    if(number % n == 0 && number % m == 0) answer = 1;
    return answer;
}
```
---
<br>

#### 3. 홀짝에 따라 다른 값 반환하기
##### 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = 0;
    if(n%2==0){
        for(int i=0; i<=n; i+=2) {
            answer += i*i;
        }
    } else {
        for(int i=1; i<=n; i+=2) {
            answer += i;
        }
    }
    return answer;
}
```
---
<br>

#### 4. 조건 문자열
##### 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.
* 두 수가 n과 m이라면
* ">", "=" : n >= m
* "<", "=" : n <= m
* ">", "!" : n > m
* "<", "!" : n < m
##### 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.
##### 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요. 
##### (단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.)
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string ineq, string eq, int n, int m) {
    int answer = 0;
    if(eq == "="){
        if(ineq == ">") answer = n >= m;
        else answer = n <= m; 
    }
    else{
        if(ineq == ">") answer = n > m;
        else answer = n < m;
    }
    return answer;
}
```
---
<br>

#### 5. flag에 따라 다른 값 반환하기
##### 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int a, int b, bool flag) {
    int answer = 0;
    flag ? answer = a+b : answer = a-b;
    return answer;
}
```
