---
title: "STAR KEEPER 개발 일지 #04: 시스템으로 구축하는 무한 우주와 기술적 도전"
pubDate: 2026-03-16
description: "우주의 끊어진 신경망을 다시 연결하는 감성 물류 퍼즐, STAR KEEPER의 기획과 시작을 기록합니다."
category: "STAR KEEPER"
author: "avelose159"
---

## 프로젝트, **STAR KEEPER: The Architect of Starlight**

---
---
<br>

### 🌌 프로젝트 개요

    프로젝트명: STAR KEEPER: The Architect of Starlight

    핵심 컨셉: 주인공 없는 무한 확장형 우주 복원 (Survivors-like + Logistics + Puzzle)

    기술 스택: Unity 6, Cinemachine v3, New Input System, Particle System
    
### 🛠️ Technical Deep Dive: 기술적 난제와 해결 전략

#### 1. 시네머신 기반의 무중력 카메라 컨트롤러 (UX & Input)가장 먼저 직면한 과제는 우주를 유영하는 듯한 부드러운 카메라 조작감을 구현하는 것이었습니다.

- 문제 상황: 유니티 6의 새로운 Input System과 Cinemachine v3를 연동하는 과정에서 기존 Input.GetAxis 방식이 작동하지 않는 InvalidOperationException이 발생했습니다.

- 해결 방법:Mouse.current.delta를 직접 읽어와 픽셀 좌표 오차를 없앴고, CamTarget이라는 별도의 빈 오브젝트를 카메라가 쫓게 하는 방식을 채택했습니다.

- 기술적 포인트: 카메라가 직접 움직이는 것이 아니라 타겟이 움직이고 시네머신의 Damping 수치를 조정함으로써, 마우스 드래그를 멈췄을 때 관성에 의해 부드럽게 멈추는 '무중력 유영' 느낌을 구현했습니다.

- Cinemachine v3 이슈: 구버전의 Framing Transposer 대신 새로운 Position Control > Follow 모듈을 설정하여 타겟 추적 로직을 완성했습니다.

#### 2. 동적 밀도 제어를 통한 '무한 우주' 최적화 (Optimization)

줌 인/아웃 시 배경의 별가루(Particle)가 끊기거나 밀도가 변하는 현상은 몰입감을 해치는 큰 문제였습니다.

- 수학적 도전: 카메라가 줌 아웃되면 시야 면적은 **줌 수치의 제곱($Zoom^2$)**에 비례해 넓어집니다. 

단순히 파티클 발생량만 고정하면 줌 아웃 시 우주가 텅 비어 보이는 현상이 발생했습니다.

- 해결 로직:면적 기반 발생량 조절: emission.rateOverTime = Area * Density 공식을 적용해 줌 수치에 따라 입자 발생량을 실시간 계산했습니다.

- Max Particles 동적 확장: 발생량만 늘리면 Max Particles 제한에 걸려 입자가 사라지므로, ExpectedMax = Rate * Lifetime 로직을 통해 물통(최대 개수)의 크기도 함께 키워 최적화를 달성했습니다.

- 버퍼 존(Buffer Zone): 카메라 시야보다 3배 넓은 Box Shape를 설정하고 Simulation Space를 World로 두어, 드래그 시 새로운 입자가 갑자기 나타나는(Pop-in) 현상을 원천 차단했습니다.

#### 3. 구조적 대전환: 주인공과 챕터의 삭제 (Game Architecture)초기에는 'Unit-734'라는 주인공 캐릭터가 있었으나, 게임의 본질인 '기하학적 질서'를 강조하기 위해 이를 과감히 삭제했습니다.

- 설계 변경: 플레이어를 인격체가 아닌 **'최상위 중력 제어 권한(OS)'**으로 정의했습니다.

- 심리스 확장: 챕터 구분을 없애고, 스테이지 클리어 시 발생하는 빛의 파동이 실시간으로 다음 구역의 안개를 걷어내는 '무경계 확장 시스템'을 설계했습니다. 

이는 유저가 끊김 없는 거대한 하나의 우주를 복원한다는 성취감을 극대화합니다.

#### 성과 및 회고

- UX 개선: New Input System 적용으로 마우스 클릭/드래그 충돌 문제를 해결하고 직관적인 조작감 확보.

- 최적화: 파티클 개수를 무작정 늘리는 대신 수학적 밀도 계산을 통해 성능 부하를 최소화하며 시각적 퀄리티 유지.

- 디자인 정체성: 불필요한 리소스를 걷어내고 기하학적 선과 점, 광자 빔 위주의 세련된 비주얼 아이덴티티 확립.