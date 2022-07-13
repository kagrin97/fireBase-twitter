# firebase를 이용해서 채팅,사진을 저장하고 가져오는 앱입니다.

***

1. 사용 기술

- frontEnd : React
- backend, db : firebase
- deploy : vercel

2. 구현한 기능

  2.1 채팅
    - addDoc()으로 채팅과 사진을 db에 저장할수있다.
    - onSnapshot()으로 실시간 doc을 가져와 모든 채팅 목록을 가져온다.
    - deleteDoc()으로 자신이 작성한 채팅만 삭제할수있다.
    - updateDoc()으로 자신이 작성한 채팅을 수정할수있다.
    
  2.2 사용자 인증
    - onAuthStateChanged()로 현재 로그인 상태인지 체크한다.
    - createUserWithEmailAndPassword()로 이메일 회원가입 할수있다.
    - signInWithEmailAndPassword()로 이메일 로그인한다.
    - GoogleAuthProvider()로 구글 사용자 정보를 가져온다.
    - GithubAuthProvider()로 깃헙 사용자 정보를 가져온다.
    - signInWithPopup()로 공급자에 따라서 로그인 팝업창을 실행한다.
    - signOut()으로 로그아웃 
  
  2.3 사용자 정보 변경
    - updateProfile()로 사용자 이름 or 아바타사진을 변경한다.
    
