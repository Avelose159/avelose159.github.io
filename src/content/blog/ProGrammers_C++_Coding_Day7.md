---
title: "프로그래머스 C++ 코딩 7일차"
pubDate: 2026-03-08
description: "프로그래머스 C++ 코딩 7일차"
category: "CODING"
author: "avelose159"
---
#### 1. 수열과 구간 쿼리 4
 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.

 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
```csharp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    vector<int> answer;
    for(int i=0; i<queries.size(); i++) {
        int temp=0;
        for(int j=queries[i][0]; j<=queries[i][1]; j++) {
            if(j%queries[i][2] == 0) {
                arr[j]++;
            }
        }
    }
    return arr;
}
```
#### 2. 배열 만들기 2
정수 l과 r이 주어졌을 때, l 이상 r이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.
```csharp
#include <string>
#include <vector>

using namespace std;

bool check(int n) {
    string s = to_string(n);
    for (char c : s) {
        if(c=='0' || c=='5') continue;
        return false;
    }
    return true;
}

vector<int> solution(int l, int r) {
    vector<int> answer;
    for(int i=l; i<=r; i++) {
        if(check(i)) answer.push_back(i);
    }
    if(answer.empty()) return {-1};
    return answer;
}
```
#### 3. 카운트 업
 정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
```csharp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int start_num, int end_num) {
    vector<int> answer;
    for(int i=start_num; i<=end_num; i++) {
        answer.push_back(i);
    }
    return answer;
}
```
#### 4. 콜라츠 수열 만들기
 모든 자연수 x에 대해서 현재 값이 x이면 x가 짝수일 때는 2로 나누고, x가 홀수일 때는 3 * x + 1로 바꾸는 계산을 계속해서 반복하면 언젠가는 반드시 x가 1이 되는지 묻는 문제를 콜라츠 문제라고 부릅니다.

 그리고 위 과정에서 거쳐간 모든 수를 기록한 수열을 콜라츠 수열이라고 부릅니다.

 계산 결과 1,000 보다 작거나 같은 수에 대해서는 전부 언젠가 1에 도달한다는 것이 알려져 있습니다.

 임의의 1,000 보다 작거나 같은 양의 정수 n이 주어질 때 초기값이 n인 콜라츠 수열을 return 하는 solution 함수를 완성해 주세요.
```csharp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int n) {
    vector<int> answer;
    while(n>1) {
        answer.push_back(n);
        if(n%2==0) n = n / 2;
        else n = (n*3)+1;
    }
    answer.push_back(1);
    return answer;
}
```
#### 5. 배열 만들기 4
 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.

 변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.

 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
 stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
 stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
 위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.
```csharp
#include <string>
#include <vector>
#define MAX 1e9

using namespace std;

vector<int> solution(vector<int> arr, vector<vector<int>> queries) {
    vector<int> answer;
    
    for(int i=0; i<queries.size(); i++) {
        int temp = MAX;
        for(int j=queries[i][0]; j<=queries[i][1]; j++) {
            if(arr[j] > queries[i][2]) {
                if(arr[j]<temp) temp = arr[j];
            }
        }
        if(temp==MAX) answer.push_back(-1);
        else answer.push_back(temp);
    }
    return answer;
}
```
