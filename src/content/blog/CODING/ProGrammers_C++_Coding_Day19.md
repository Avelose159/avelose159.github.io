---
title: "프로그래머스 C++ 코딩 19일차"
pubDate: 2026-03-26
description: "프로그래머스 C++ 코딩 19일차"
category: "CODING"
author: "avelose159"
---
#### 1. 세 개의 구분자
임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.

예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.

문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<string> solution(string myStr) {
    vector<string> answer;
    answer.push_back("");
    int start = 0;
    for(char c : myStr) {
        if(c=='a'||c=='b'||c=='c') {
            if(!answer[start].empty()) {
                answer.push_back("");
                start++;       
            }
        }
        else answer[start].push_back(c);
    }
    if(answer.back().empty()) answer.pop_back();
    if(answer.empty()) answer.push_back("EMPTY");
    return answer;
}
```
---
<br>

#### 2. 배열의 원소만큼 추가하기
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 양의 정수 배열 arr가 매개변수로 주어질 때, arr의 앞에서부터 차례대로 원소를 보면서 원소가 a라면 X의 맨 뒤에 a를 a번 추가하는 일을 반복한 뒤의 배열 X를 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> answer;
    for(const auto n : arr) {
        for(int i=0; i<n; i++) {
            answer.push_back(n);
        }
    }
    return answer;
}
```
---
<br>

#### 3. 빈 배열에 추가, 삭제하기
아무 원소도 들어있지 않은 빈 배열 X가 있습니다. 길이가 같은 정수 배열 arr과 boolean 배열 flag가 매개변수로 주어질 때, flag를 차례대로 순회하며 flag[i]가 true라면 X의 뒤에 arr[i]를 arr[i] × 2 번 추가하고, flag[i]가 false라면 X에서 마지막 arr[i]개의 원소를 제거한 뒤 X를 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, vector<bool> flag) {
    vector<int> answer;
    for(int i=0; i<arr.size(); i++) {
        if(flag[i]) {
            answer.insert(answer.end(), arr[i]*2, arr[i]);
        }
        else {
            answer.erase(answer.end()-arr[i], answer.end());
        }
    }
    return answer;
}
```
---
<br>

#### 4. 배열 만들기 6
0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.

i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.

만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.

단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> answer;
    int i = 0;
    for(int i=0; i<arr.size(); i++) {
        if(!answer.empty() && answer.back() == arr[i]) {
            answer.pop_back();
        }
        else {
            answer.push_back(arr[i]);
        }
    }
    if(answer.empty()) answer.push_back(-1);
    return answer;
}
```
---
<br>

#### 5. 무작위로 K개의 수 뽑기
랜덤으로 서로 다른 k개의 수를 저장한 배열을 만드려고 합니다. 적절한 방법이 떠오르지 않기 때문에 일정한 범위 내에서 무작위로 수를 뽑은 후, 지금까지 나온적이 없는 수이면 배열 맨 뒤에 추가하는 방식으로 만들기로 합니다.

이미 어떤 수가 무작위로 주어질지 알고 있다고 가정하고, 실제 만들어질 길이 k의 배열을 예상해봅시다.

정수 배열 arr가 주어집니다. 문제에서의 무작위의 수는 arr에 저장된 순서대로 주어질 예정이라고 했을 때, 완성될 배열을 return 하는 solution 함수를 완성해 주세요.

단, 완성될 배열의 길이가 k보다 작으면 나머지 값을 전부 -1로 채워서 return 합니다.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, int k) {
    vector<int> answer;
    for(int n : arr) {
        if(answer.size() == k) break;
        
        bool found = false;
        for (int x : answer) {
            if (x == n) { 
                found = true; break; 
            }
        }
        if (!found) answer.push_back(n);
    }
    while (answer.size() < k) {
        answer.push_back(-1);
    }
    return answer;
}
```