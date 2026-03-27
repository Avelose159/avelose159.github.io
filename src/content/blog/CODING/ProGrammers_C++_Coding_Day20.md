---
title: "프로그래머스 C++ 코딩 19일차"
pubDate: 2026-03-26
description: "프로그래머스 C++ 코딩 19일차"
category: "CODING"
author: "avelose159"
---
#### 1. 배열의 길이를 2의 거듭제곱으로 만들기
정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> answer;
    int n = 1;
    while(n<arr.size()) {
        n = n*2;
    }
    while(arr.size()<n) {
        arr.push_back(0);
    }
    return arr;
}
```
---
<br>

#### 2. 배열 비교하기
이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>
#include <numeric>

using namespace std;

int solution(vector<int> arr1, vector<int> arr2) {
    if(arr1.size() > arr2.size()) return 1;
    if(arr1.size() < arr2.size()) return -1;
    
    int temp1 = accumulate(arr1.begin(), arr1.end(), 0);
    int temp2 = accumulate(arr2.begin(), arr2.end(), 0);
    
    if(temp1 > temp2) return 1;
    if(temp1 < temp2) return -1;
    
    return 0;
}
```
---
<br>

#### 3. 문자열 묶기
문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<string> strArr) {
    int answer = 0;
    vector<int> temp(31, 0);
    
    for(const auto& s : strArr) {
        temp[s.length()]++;
    }
    
    for (int x : temp) {
        if (x > answer) {
            answer = x;
        }
    }
    return answer;
}
```
---
<br>

#### 4. 배열의 길이에 따라 다른 연산하기
정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr, int n) {
    int start = (arr.size() % 2 == 0) ? 1 : 0;
    
    for(int i = start; i<arr.size(); i+=2){
        arr[i]+=n;
    }
    return arr;
}
```
---
<br>

#### 5. 뒤에서 5등까지
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
```cpp
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> num_list) {
    sort(num_list.begin(), num_list.end());
    
    vector<int> answer(num_list.begin(), num_list.begin() + 5);
    
    return answer;
}
```