# 현재 작업사항 (8월)

<br/>
### 9일
1) react-query 설치
- 연습을 목적으로 React-Query를 반영하기 위해 사용
- 사용 배경
- - 반복적인 비동기 데이터를 호출 방지
- - 불필요한 API 콜을 줄여 서버에 대한 부하를 줄이기 위해 사용시도
- - 일반적으로 데이터 갱신시: 화면을 보고 있을때, 페이지 전환 일어날때, 페이지 전환없이 이벤트가 발생해 데이터 요청시 갱신한다.
- React-Query 사용 시 : Refetching 설정 가능
- - refetchOnWindowFocus : 브라우저에 포커스가 들어온 경우
- - refetchOnMount : 새로운 컴포넌트 마운트가 발생시
- - refetchOnReconnect : 네트워크 재연결 발생 시
- 지금은 Redux로 사용하고 있지만, 학습 진행 후 리팩토링 예정 (Redux에선 Server 처리에 한계가 있고, 지금 legacy형태로 사용 중이다.)
2) URI 경로 재설정 (App.js, HeaderData)
- 페이징 네이션 처리 시 고객 편의성 개편용으로 사용
- 생성 형식 : domain/menu/1    // 1이라는 숫자는 1페이지를 의미함
3) Teacher : useParams() 사용, 마지막으로 navigator를 이용하여 페이징처리 도입예정

<br/>
### 13일
1) back-end
- 먼저, entity 구조화로 나눔
- - vo : 프론트엔드 서버 View단에서만 보여질 화면 상의 데이터만 전달
- - dto : 데이터를 전송시에만 사용하는 형태 (프론트 단에서 해당 데이터를 받아온다.)
- - dao : entity를 직접 접근한 데이터의 파라미터를 정의
2) Spring boot 환경 설정 변경
- - Mapper의 alias를 dto 디렉토리 내에 설정

<br/>
### 14일
1) 블로그
- - Back-End : 페이지 네이션 전체페이지 및 select 시 해당 범위만 출력하는 로직 수정, 작성자명을 정적으로 프론트단에 출력할 수 있도록 화면 출력
- - Front-End : 페이지 네이션 사용자 편의성 개편을 위해 해당 페이지 지점을 알 수 있도록 유지, 블로그 디렉토리 구조 변경
2) 사용자 편의성 페이지네이션 적용
- - 악보, 레스너찾기, 연습실 정보를 블로그에서 페이지네이션 기능 똑같이 적용 (front, back 모두)
3) 관리자용 - 대쉬보드 추가 (front단)
- - wijmo 라이브러리 활용
- - 참조 : https://stackblitz.com/edit/react-wijmo-salesdash-udsdv7?file=package.json

<br/>
### 15일
1) back-end>jwt 기능추가
- - jwt 먼저 샘플로 개발
- - 현재 jwt Token 생성 완료
- - 차후, H2 Database를 활용하여 token 값 검사 여부 구현 예정
2) dto 구성에 맞게 수정
- dao : jdbc를 직접 database를 연결하여 사용하는 것 (현재 my-batis 사용으로 쓰이지 않음)
- dto : 데이터베이스 entity 역할을 수행하는 것 (가변성 역할 수행)
- vo : 불가변성으로, 값을 전달할 때 쓰는 back-end 버전 entity로 주로 프론트엔드 개발자에게 data 전달
3) 로그인 부분
- Front-end : css 형식을 scss 형식으로 변경
- 회원가입 부분 폼 양식 추가 (수정작업은 더 필요함)



