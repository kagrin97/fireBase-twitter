# firebase를 이용해 채팅앱을 만들었습니다.

주소 : https://firebase-twitter.vercel.app/

## 사용 기술

- frontEnd : React
- backend, db : firebase
- deploy : vercel

## 구현한 기능

  + 채팅
   
    ![채팅](https://user-images.githubusercontent.com/75124028/178646506-19c81b49-ab95-4944-9861-968b6306435e.gif)
    - addDoc()으로 채팅과 사진을 db에 저장할수있다.
    - onSnapshot()으로 실시간 doc을 가져와 모든 채팅 목록을 가져온다.
    - deleteDoc()으로 자신이 작성한 채팅만 삭제할수있다.
    - updateDoc()으로 자신이 작성한 채팅을 수정할수있다.
 
 
  + 사용자 인증
   
    ![로그인](https://user-images.githubusercontent.com/75124028/178647895-22fd526b-d751-4d2c-b30d-b445adb03625.gif)
    - onAuthStateChanged()로 현재 로그인 상태인지 체크한다.
    - createUserWithEmailAndPassword()로 이메일 회원가입 할수있다.
    - signInWithEmailAndPassword()로 이메일 로그인한다.
    - GoogleAuthProvider()로 구글 사용자 정보를 가져온다.
    - GithubAuthProvider()로 깃헙 사용자 정보를 가져온다.
    - signInWithPopup()로 공급자에 따라서 로그인 팝업창을 실행한다.
    - signOut()으로 로그아웃 
  
  
  + 사용자 정보 변경
   
    ![프로필변경](https://user-images.githubusercontent.com/75124028/178648302-a9dbf7b3-c79a-4c50-9a58-1fa34339a691.gif)
    - updateProfile()로 사용자 이름 or 아바타사진을 변경한다.
    - 미리보기로 올려놓은 프로필 사진을 취소할수 있다.
