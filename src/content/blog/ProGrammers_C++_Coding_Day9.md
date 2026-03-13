---
title: "프로그래머스 C++ 코딩 9일차"
pubDate: 2026-03-11
description: "프로그래머스 C++ 코딩 9일차"
category: "CODING"
author: "avelose159"
---
#### 1. 간단한 논리 연산
boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.

(x1 ∨ x2) ∧ (x3 ∨ x4)<br><br>
```∨ = || ∧ = &&```
```c++
#include <string>
#include <vector>

using namespace std;

bool solution(bool x1, bool x2, bool x3, bool x4) {
    bool answer = true;
    answer = ((x1 || x2) && (x3 || x4));
    return answer;
}
```
#### 2. 주사위 게임 3
1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.

네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요
```c++
#include <cmath>
#include <algorithm>

using namespace std;

int solution(int a, int b, int c, int d) {
    // 1. 네 숫자가 모두 같은 경우 (1가지 상황)
    if (a == b && b == c && c == d) {
        return 1111 * a;
    }

    // 2. 세 숫자가 같고 하나가 다른 경우 (4가지 상황)
    if (a == b && b == c) return pow(10 * a + d, 2); // abc 같음
    if (a == b && b == d) return pow(10 * a + c, 2); // abd 같음
    if (a == c && c == d) return pow(10 * a + b, 2); // acd 같음
    if (b == c && c == d) return pow(10 * b + a, 2); // bcd 같음

    // 3. 두 개씩 같은 값이 나오는 경우 (3가지 상황)
    if (a == b && c == d) return (a + c) * abs(a - c); // (ab), (cd)
    if (a == c && b == d) return (a + b) * abs(a - b); // (ac), (bd)
    if (a == d && b == c) return (a + b) * abs(a - b); // (ad), (bc)

    // 4. 어느 두 개만 같고 나머지는 다른 경우 (6가지 상황)
    if (a == b) return c * d;
    if (a == c) return b * d;
    if (a == d) return b * c;
    if (b == c) return a * d;
    if (b == d) return a * c;
    if (c == d) return a * b;

    // 5. 네 주사위 숫자가 모두 다른 경우
    // min 함수를 여러 번 써서 최솟값을 찾습니다.
    return min({a, b, c, d});
}
```
```c++
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int solution(int a, int b, int c, int d) {
    // 1. 네 숫자를 벡터에 넣고 정렬합니다.
    vector<int> v = {a, b, c, d};
    sort(v.begin(), v.end());

    // v[0], v[1], v[2], v[3] 순서로 정렬됨

    // Case 1: 네 숫자가 모두 같은 경우
    if (v[0] == v[3]) {
        return 1111 * v[0];
    }
    
    // Case 2: 세 숫자가 같고 하나가 다른 경우
    // 정렬되었으므로 (p, p, p, q) 또는 (q, p, p, p) 형태만 존재
    if (v[0] == v[2]) { // 앞의 3개가 같은 경우 (p, p, p, q)
        return pow(10 * v[0] + v[3], 2);
    }
    if (v[1] == v[3]) { // 뒤의 3개가 같은 경우 (q, p, p, p)
        return pow(10 * v[1] + v[0], 2);
    }

    // Case 3: 두 개씩 같은 값이 나오는 경우 (p, p, q, q)
    if (v[0] == v[1] && v[2] == v[3]) {
        return (v[0] + v[2]) * abs(v[0] - v[2]);
    }

    // Case 4: 두 개만 같고 나머지는 각각 다른 경우 (p, p, q, r)
    // 정렬 상태이므로 (p, p, q, r), (q, p, p, r), (q, r, p, p) 세 가지 상황
    if (v[0] == v[1]) {
        return v[2] * v[3];
    }
    if (v[1] == v[2]) {
        return v[0] * v[3];
    }
    if (v[2] == v[3]) {
        return v[0] * v[1];
    }

    // Case 5: 모두 다른 경우
    // 정렬되었으므로 가장 작은 값은 맨 앞의 v[0]
    return v[0];
}
```
#### 3. 글자 이어 붙여 문자열 만들기
 문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
```c++
#include <string>
#include <vector>

using namespace std;

string solution(string my_string, vector<int> index_list) {
    string answer = "";
    int i = 0;
    while(i < index_list.size()) {
        answer.push_back(my_string[index_list[i]]);
        i++;
    }
    return answer;
}
```
#### 4. 9로 나눈 나머지
 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같은 것이 알려져 있습니다.
 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.
```c++
#include <string>
#include <vector>

using namespace std;

int solution(string number) {
    int answer = 0,i=0,temp=0;
    while(i<number.size()){
        temp = temp + (number[i]-'0');
        i++;
    }
    answer = temp % 9;
    return answer;
}
```
#### 5. 문자열 여러 번 뒤집기
 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다. queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다. my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
```c++
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string my_string, vector<vector<int>> queries) {
    for (int i=0; i<queries.size(); i++) {
        reverse(my_string.begin() + queries[i][0], my_string.begin() + queries[i][1]+1);
    }
    return my_string;
}
```