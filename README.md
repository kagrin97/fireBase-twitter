# 🕊 fireBase-twitter 프로젝트 목차 🕊

- [1. 최종 구현 영상](#1-최종-구현-영상)
  - [1-1. 채팅 기능](#1-1-채팅-기능)
  - [1-2. 사용자 인증](#1-2-사용자-인증)
  - [1-3. 사용자 정보 변경](#1-3-사용자-정보-변경)
- [2. 구현된 기능 목록](#2-구현된-기능-목록)
  - 2-1. 채팅 기능
  - 2-2. 사용자 인증 기능
  - 2-2. 사용자 정보 변경 기능
- [3. 폴더 구조](#3-폴더-구조)
  - 3-1. 폴더 구조 설명
  - 3-2. 폴더 구조 tree
- [4. 과제 진행 시 주안점](#4-프로젝트-주안점)
- [5. 한계점 및 개선 사항](#5-한계점)

### 기술 스택
<div>
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black">
<img src="https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white">
<img src="https://img.shields.io/badge/RTL-E9113B.svg?style=for-the-badge&logo=RTL&logoColor=white">
</div>

## 1. 최종 구현 영상

- ### 1-1) 채팅 기능

  ![채팅](https://user-images.githubusercontent.com/75124028/178646506-19c81b49-ab95-4944-9861-968b6306435e.gif)

- ### 1-2) 사용자 인증

  ![로그인](https://user-images.githubusercontent.com/75124028/178647895-22fd526b-d751-4d2c-b30d-b445adb03625.gif)

- ### 1-3) 사용자 정보 변경

  ![프로필변경](https://user-images.githubusercontent.com/75124028/178648302-a9dbf7b3-c79a-4c50-9a58-1fa34339a691.gif)

## 2. 구현된 기능 목록

- ### 2-1) 채팅 기능

  ***

  - [x] 채팅과 사진을 db에 저장 할수 있습니다.

  - [x] 실시간 doc을 가져와 모든 채팅 목록을 가져옵니다.

  - [x] 자신이 작성한 채팅을 수정할수있습니다.

  - [x] 자신이 작성한 채팅만 삭제할수있습니다.

- ### 2-2) 사용자 인증 기능

  ***

  - [x] 현재 로그인 상태인지 체크가능 해야합니다.

  - [x] 이메일 회원가입 할수있습니다, 이메일 로그인 할수있습니다.

  - [x] 구글 아이디로 로그인 가능해야합니다, 깃헙 아이디로도 로그인 가능

  - [x] 언제든지 로그아웃이 가능해야합니다

- ### 2-3) 사용자 정보변경 기능

  ***

  - [x] 사용자 이름 or 아바타사진을 변경 가능해야 합니다.

  - [x] 미리보기로 올려놓은 프로필 사진을 취소할수 있습니다.

## 3. 폴더 구조

- ### 3-1) 폴더 구조 설명

  ***

  자주 쓰이는 파일을 파일의 성질에 따라서 각각 폴더별로 구분을 했습니다.

  | 폴더           | 용도                                                                  |
  | -------------- | --------------------------------------------------------------------- |
  | **api**        | 실제로 firebase와 연동되는 폴더입니다                                 |
  | **components** | 여러곳에서 쓰이는 컴포넌트를 넣습니다.                                |
  | **hooks**      | 비즈니스 로직과 뷰를 분리할때 비즈니스 로직들이 모여있습니다          |
  | **pages**      | 실제 각각 페이지와 그 페이지에서만 쓰는 컴포넌트를 모았습니다         |
  | **util**       | 간단한 실행 함수들을 모았습니다..                                     |

- ### 3-2) 폴더 구조 tree

  ***

  ```
  fireBase-twitter
  ├─ package-lock.json
  ├─ src
  │  ├─ index.css
  │  ├─ util
  │  │  ├─ errorHandler.ts
  │  │  └─ userObjHandler.ts
  │  ├─ hooks
  │  │  ├─ useEditProfile.ts
  │  │  ├─ useGetNweets.ts
  │  │  ├─ useCommentsForm.ts
  │  │  ├─ useCommentsList.ts
  │  │  ├─ useAuthForm.ts
  │  │  └─ useCheckUser.ts
  │  ├─ components
  │  │  └─ Nav.tsx
  │  ├─ index.tsx
  │  ├─ pages
  │  │  ├─ Profile
  │  │  │  ├─ Profile.tsx
  │  │  │  └─ components
  │  │  ├─ Auth
  │  │  │  ├─ Auth.tsx
  │  │  │  └─ components
  │  │  │     └─ AuthForm.tsx
  │  │  └─ Home
  │  │     ├─ components
  │  │     │  ├─ CommentsList.tsx
  │  │     │  └─ CommentsForm.tsx
  │  │     └─ Home.tsx
  │  ├─ App.tsx
  │  ├─ api
  │  │  └─ authApi.ts
  │  └─ fbase.tsx
  ├─ firebase.json
  ├─ .gitignore
  ├─ package.json
  ├─ README.md
  ├─ tailwind.config.js
  ├─ postcss.config.js
  ├─ tsconfig.json
  └─ public
  ```

## 4. 프로젝트 주안점

사실 예전에 작성했던 코드들을 최근에 다시 리팩토링하였기 떄문에 추상화와 분리

그리고 any사용을 최대한 줄이는 방향으로 리팩토링을 진행했습니다

## 5. 한계점

firebase측에서 가져오는 객체의 type을 찾을수가 없어 any로 처리했습니다

그리고 Redux, Redux-saga를 유저 정보 객체에 적용할려고했지만 fireBase가 사용자가

로그인 상태인지 또한 CRUD를 firebase가 처리하는 로직이 달라 Redux, Redux-saga

적용하지 않았습니다. (feat/#4 브랜치에 Redux, Redux-saga 코드를 찾을수가 있습니다)
