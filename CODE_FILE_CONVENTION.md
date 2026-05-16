# 🚀 Team Project Code Convention (React + JavaScript)

본 문서는 우리 팀의 원활한 협업과 코드 품질 유지를 위한 프론트엔드(React + JS) 개발 및 폴더 구조 컨벤션입니다. 모든 팀원은 작업 전 해당 컨벤션을 숙지하고 준수해 주시기 바랍니다.

## 1. 개발 코드 컨벤션 (Code Convention)

### 1.1. 네이밍 컨벤션 (Naming Convention)

협업 시 코드의 소유권과 책임 소재를 명확히 하기 위해 **개인별 이니셜 접두어**를 사용합니다. 기본적으로 JavaScript 네이밍 관례를 따릅니다.

* **변수 및 함수명 (접두어 + camelCase)**
* 모든 변수와 함수 앞에는 담당자의 이니셜(소문자)을 붙입니다. (ex : `ej_` )
* **예시:** `yj_UserList`, `sh_HandleSubmit()`


* **상수 (CONSTANT_CASE)**
* 변경되지 않는 전역 설정값은 모두 대문자와 언더바(`_`)를 사용합니다.
* **예시:** `MAX_GROUP_SIZE = 7`, `MIN_MANNER_SCORE = 60`


* **React 컴포넌트 및 클래스명 (접두어 + PascalCase)**
* 화면을 구성하는 UI 컴포넌트나 커스텀 훅 등에 사용합니다.
* **예시:** `function YjUserProfile() {}`, `const ShNavigationMenu = () => {}`


### 1.2. 주석 작성 규칙 (Comment Rules)

코드의 가독성과 유지보수성을 높이기 위해 **JSDoc 스타일**을 표준으로 채택하여 주석을 작성합니다.

* **컴포넌트 및 핵심 로직 시작 부분**
* 담당자와 해당 기능의 핵심적인 역할을 명시합니다.


```javascript
/**
 * 사용자 로그인 처리를 담당하는 커스텀 훅
 * 담당자: 이름 (이니셜)
 * 설명: 입력받은 인증 정보를 바탕으로 토큰을 발급받고 전역 상태를 업데이트합니다.
 */
const shUseAuth = () => {
    // 로직 구현...
};

```

* **데이터 출처 명시**
* 외부 API를 호출하는 함수 위, 또는 더미 데이터 파일 상단에 주석으로 출처를 밝힙니다.


```javascript
// 데이터 출처: 서울특별시 지하철 승하차 승객수 (공공데이터포털 JSON API)

```

### 1.3. 코드 스타일 (Code Style)

* **들여쓰기 (Indentation)**: 회의록 결정 사항에 따라 **Tab**을 사용합니다.
* **타입 힌팅 (Type Hinting)**: TypeScript 대신 JavaScript를 사용하므로, 에러 방지와 협업 효율을 위해 JSDoc을 활용하여 매개변수(`@param`)와 반환값(`@returns`)의 타입을 명시합니다.

```javascript
/**
 * 사용자 데이터를 UI에 맞게 포맷팅하는 함수
 * @param {Object} user - 사용자 정보 원본 객체
 * @returns {string} 포맷팅된 사용자 표시 이름
 */
const yjFormatUserName = (user) => { 
    // 로직 구현... 
}

```

---

## 2. 파일 및 디렉토리 컨벤션 (File & Directory Convention)

### 2.1. 파일 네이밍 규칙 (File Naming)

**확장자**는 다음과 같습니다.

* **형식**: `기능명_.확장자`
* **확장자 구분**:
* React UI 컴포넌트: `.jsx`
* 순수 로직, 훅, 일반 함수: `.js`


---

### 2.2. 디렉토리 구조 (Architecture Structure)

우리 팀은 **기능 단위로 쪼개고 책임을 고정**하여 변경 범위를 작게 유지하는 아키텍처를 채택합니다. 라우팅 진입점, 도메인 기능, 공통 UI, 그리고 인프라 코드를 엄격히 분리합니다.

```text
project_root/
├── public/                  # 🌐 정적 파일 (index.html, favicon 등)
├── src/
│   ├── pages/               # 📄 라우트 엔트리 (페이지 단위 진입, 얇게 유지)
│   │   ├── Home_v0417.jsx
│   │   └── Login_v0417.jsx
│   │
│   ├── features/            # 💡 도메인 기능 모듈 (화면+훅+API 조합, 실질 비즈니스 로직 집중)
│   │   ├── auth/
│   │   ├── matching/
│   │   └── board/
│   │
│   ├── components/common/   # 🧩 재사용 UI 프리미티브 (버튼, 모달 등 비즈니스 로직 완전 배제)
│   │   ├── Button.jsx
│   │   └── Modal.jsx
│   │
│   ├── apis/                # 🔌 API 타입 및 도메인별 엔드포인트 호출 함수
│   │
│   ├── libs/                # ⚙️ 횡단 관심사(Cross-cutting concerns) 단일 관리 인프라
│   │   ├── http/            # axios client, interceptor 설정
│   │   └── security/        # auth/token store, refresh 처리 로직
│   │
│   ├── utils/               # 🛠️ 도메인에 종속되지 않는 공통 유틸리티
│   │   ├── dateUtils.js     # 날짜 포맷팅 함수 등
│   │   └── helpers.js       # 기타 유틸 함수
│   │
│   ├── assets/              # 📂 아이콘, 배경, 로고 등 정적 리소스
│   │
│   ├── App.jsx              # 🚀 전체 라우팅 및 Provider 설정
│   └── index.js             # React Root Render
│
├── docs/                    # 🔥 컨벤션 및 협업 규칙 문서
├── package.json
└── README.md

```

#### 📌 폴더 구조 설계 철학 (Why this structure?)

1. **얇은 Pages & 두꺼운 Features**: `pages`는 라우팅을 위한 껍데기 역할만 수행하며, 실질적인 비즈니스 로직과 상태 관리, 컴포넌트 조합은 `features` 도메인 내부에 집중합니다.
2. **UI와 비즈니스 로직의 결합 차단**: `components/common`은 어떠한 도메인 지식도 가지지 않는 순수 UI 컴포넌트로 구성하여 전역적인 재사용성을 극대화합니다.
3. **인프라 코드 단일화**: 인증, 네트워크 세팅 등 앱 전체에 걸친 횡단 관심사는 `libs`에서 전담하여 도메인 모듈 간의 강한 결합(의존성)을 방지합니다.
4. **빠른 이슈 트래킹**: 결과적으로 기능 추가 및 버그 발생 시 **"어디를 고쳐야 하는지"가 직관적으로 파악**되며, 팀원 간의 코드 병합 충돌(Merge Conflict) 범위도 획기적으로 줄어듭니다.