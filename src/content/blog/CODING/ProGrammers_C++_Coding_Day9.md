---
title: "프로그래머스 C++ 코딩 9일차"
pubDate: 2026-03-16
description: "프로그래머스 C++ 코딩 9일차"
category: "CODING"
author: "avelose159"
---
#### 1. 배열 만들기 5
문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.

배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<string> intStrs, int k, int s, int l) {
    vector<int> answer;
    
    vector<int> temp;
    for (int i=0; i<intStrs.size(); i++) {
        int cmp = stoi(intStrs[i].substr(s,l));
        if (cmp > k) {
            temp.push_back(cmp);
        }
    }
    return temp;
}
```
---
<br>

#### 2. 부분 문자열 이어 붙여 문자열 만들기
길이가 같은 문자열 배열 my_strings와 이차원 정수 배열 parts가 매개변수로 주어집니다. parts[i]는 [s, e] 형태로, my_string[i]의 인덱스 s부터 인덱스 e까지의 부분 문자열을 의미합니다. 각 my_strings의 원소의 parts에 해당하는 부분 문자열을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(vector<string> my_strings, vector<vector<int>> parts) {
    string answer = "";
    
    for(int i=0; i < my_strings.size(); i++) {
        int start = parts[i][0];
        int end = parts[i][1];
        
        answer += my_strings[i].substr(start,end-start+1);
    }
    return answer;
}
```
---
<br>

#### 3. 문자열 뒤의 n 글자
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string my_string, int n) {
    string answer = "";
    int temp = my_string.length() - n;
    return my_string.substr(temp);
}
```
---
<br>

#### 4. 접미사 배열
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> solution(string my_string) {
    vector<string> answer;
    for(int i=0; i<my_string.length(); i++) {
        answer.push_back(my_string.substr(i,my_string.length()));
    }
    sort(answer.begin(), answer.end());

    return answer;
}
```
---
<br>

#### 5. 접미사인지 확인하기
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
문자열 my_string과 is_suffix가 주어질 때, is_suffix가 my_string의 접미사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string my_string, string is_suffix) {
    int answer = 0;
    vector<string> temp;
    for(int i=0; i<my_string.length(); i++) {
        temp.push_back(my_string.substr(i,my_string.length()));
    }
    for(int i=0; i<temp.size(); i++) {
        if(temp[i] == is_suffix) {
            answer = 1;
            break;
        }
    }
    return answer;
}
```