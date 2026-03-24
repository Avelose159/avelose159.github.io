---
title: "프로그래머스 C++ 코딩 17일차"
pubDate: 2026-03-24
description: "프로그래머스 C++ 코딩 17일차"
category: "CODING"
author: "avelose159"
---
#### 1. 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string myString, string pat) {
    string answer = "";
    int index = myString.rfind(pat);
    answer += myString.substr(0, pat.size() + index);
    return answer;
}
```
---
<br>

#### 2. 문자열이 몇 번 등장하는지 세기
문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요. 
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(string myString, string pat) {
    int answer = 0;
    for(int i=0; i<myString.size(); i++){
        string word = myString.substr(i, pat.size());
        if(word==pat) answer++;
    }
    return answer;
}
```
---
<br>

#### 3. ad 제거하기
문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<string> solution(vector<string> strArr) {
    vector<string> answer;
    for(auto a : strArr) {
        if(a.find("ad") == string::npos) {
            answer.push_back(a);
        }
    }
    return answer;
}
```
---
<br>

#### 4. 공백으로 구분하기
단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<string> solution(string my_string) {
    vector<string> answer;
    string word;
    for(char a : my_string) {
        if (a == ' ') {
            if(word != "") {
                answer.push_back(word);
            }
            word = "";
        }
        else word += a;
    }
    if(!word.empty()) answer.push_back(word);
    return answer;
}
```
---
<br>

#### 5. 공백으로 구분하기 2
단어가 공백 한 개 이상으로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>
#include <sstream> // sstream 헤더 추가

using namespace std;

vector<string> solution(string my_string) {
    vector<string> answer;
    stringstream ss(my_string); // 문자열을 스트림(흐름)으로 만듭니다.
    string word;

    // 스트림에서 공백을 무시하고 단어 단위로 뽑아냅니다.
    while (ss >> word) {
        answer.push_back(word);
    }

    return answer;
}
```