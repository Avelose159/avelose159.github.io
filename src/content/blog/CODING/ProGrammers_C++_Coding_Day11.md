---
title: "프로그래머스 C++ 코딩 11일차"
pubDate: 2026-03-18
description: "프로그래머스 C++ 코딩 11일차"
category: "CODING"
author: "avelose159"
---
#### 1. 문자 개수 세기
알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(string my_string) {
    vector<int> answer;
    for(int i=65; i<91; i++) {
        int count = 0;
        for(int j=0; j<my_string.length(); j++) {
            if (int(my_string[j]) == i) {
                count++;
            }
        }
        answer.push_back(count);
    }
    for(int i=97; i<123; i++) {
        int count = 0;
        for(int j=0; j<my_string.length(); j++) {
            if (int(my_string[j]) == i) {
                count++;
            }
        }
        answer.push_back(count);
    }
    return answer;
}
```
---
<br>

#### 2. 배열 만들기 1
정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int n, int k) {
    vector<int> answer;
    for(int i=1; i<=n; i++){
        if(i%k == 0) answer.push_back(i);
    }
    return answer;
}
```
---
<br>

#### 3. 글자 지우기
문자열 my_string과 정수 배열 indices가 주어질 때, my_string에서 indices의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

string solution(string my_string, vector<int> indices) {
    string answer;
    
    sort(indices.begin(), indices.end());
    
    int j = 0;
    for(int i=0; i<my_string.length(); i++) {
        if(j < indices.size() && i == indices[j]) {
            j++;
            continue;
        }
        answer += my_string[i];
    }
    return answer;
}
```
---
<br>

#### 4. 카운트 다운
정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int start_num, int end_num) {
    vector<int> answer;
    for(int i=start_num; i>=end_num; i--) {
        answer.push_back(i);
    }
    return answer;
}
```
---
<br>

#### 5. 가까운 1 찾기
정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다. 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.

단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> arr, int idx) {
    int answer = 0;
    for(int i=0; i<arr.size(); i++) {
        if(i>=idx && arr[i]==1) {
            answer = i;
            break;
        }
        else answer = -1;
    }
    return answer;
}
```