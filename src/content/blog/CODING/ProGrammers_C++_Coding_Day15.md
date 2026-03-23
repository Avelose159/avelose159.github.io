---
title: "프로그래머스 C++ 코딩 15일차"
pubDate: 2026-03-23
description: "프로그래머스 C++ 코딩 15일차"
category: "CODING"
author: "avelose159"
---
#### 1. 조건에 맞게 수열 변환하기 1
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
    vector<int> answer;
    for(const auto& n : arr) {
        if (n>=50 && n%2==0) {
            answer.push_back(n/2);
        }
        else if (n<50 && n%2!=0) {
            answer.push_back(n*2);
        }
        else answer.push_back(n);
    }
    return answer;
}
```
---
<br>

#### 2. 조건에 맞게 수열 변환하기 2
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.

이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다. 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.

단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> arr) {
    int answer = 0;
    while(true) {
        vector<int> before = arr;
        
        for(int i=0; i<arr.size(); i++) {
            if(arr[i]>=50 && arr[i]%2==0) {
                arr[i] = arr[i]/2;
            }
            else if(arr[i]<50 && arr[i]%2!=0) {
                arr[i] = arr[i]*2+1;
            }
        }
        if(before == arr) break;
        answer++;
    }
    return answer;
}
```
---
<br>

#### 3. 1로 만들기
정수가 있을 때, 짝수라면 반으로 나누고, 홀수라면 1을 뺀 뒤 반으로 나누면, 마지막엔 1이 됩니다. 예를 들어 10이 있다면 다음과 같은 과정으로 1이 됩니다.

* 10 / 2 = 5
* (5 - 1) / 2 = 2
* 2 / 2 = 1
위와 같이 3번의 나누기 연산으로 1이 되었습니다.

정수들이 담긴 리스트 num_list가 주어질 때, num_list의 모든 원소를 1로 만들기 위해서 필요한 나누기 연산의 횟수를 return하도록 solution 함수를 완성해주세요.
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> num_list) {
    int answer = 0;
    for(int i=0; i<num_list.size(); i++) {
        while (num_list[i] != 1) {
            if(num_list[i]%2==0) {
                num_list[i] = num_list[i]/2;
                answer++;
            }
            else {
                num_list[i] = (num_list[i]-1)/2;
                answer++;
            }
        }
    }
    return answer;
}
```
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> num_list) {
    int answer = 0;
    for(int n : num_list) {
        while (n > 1) {
            n /= 2;
            answer++;
        }
    }
    return answer;
}
```
---
<br>

#### 4. 길이에 따른 연산
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
```cpp
#include <vector>

using namespace std;

int solution(vector<int> num_list) {
    int answer = 0;
    if(num_list.size() >= 11) {
        for(int n : num_list) answer += n;
        return answer;
    }
    answer = 1;
    for(int n : num_list) answer *= n;

    return answer;
}
```
---
<br>

#### 5. 원하는 문자열 찾기
알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

단, 알파벳 대문자와 소문자는 구분하지 않습니다.
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(string myString, string pat) {
    int answer = 0;
    
    transform(myString.begin(), myString.end(), myString.begin(), ::tolower);
    transform(pat.begin(), pat.end(), pat.begin(), ::tolower);
    
    if (myString.find(pat) != string::npos) answer = 1;
    
    return answer;
}
```