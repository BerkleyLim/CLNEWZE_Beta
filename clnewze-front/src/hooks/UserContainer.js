import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { anotherUserState, selectUpdateLoginUserInfoState, userState } from "../recoil/state/userState";
import UserService from "../service/UserService";
import { myPageMenuState } from "../recoil/state/myPageHeaderState";
import UseApi from "../util/UseApi"

// container 부분
const UserContainer = () => {
  const [user, setUser] = useRecoilState(userState);
  const logout = useResetRecoilState(userState);
  const myPageMenuRefresh = useResetRecoilState(myPageMenuState); // 마이페이지 번호 default로 변경
  const setAnotherUser = useSetRecoilState(anotherUserState);  // 타인이 내프로필 접근할 때
  const { signIn, createToken, userInfo, getMyProfileUserInfo } = UserService();
  const setSelectUpdateLoginUserInfo = useSetRecoilState(selectUpdateLoginUserInfoState);

  // 1) 로그인 처리 함수
  const handlerLogin = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    // resolve 상태 : true 리턴 (모달 닫기, 사용자 페이지 회원 정보 접근 허용)
    // reject 상태 : false 리턴 (모달 유지, 사용자 페이지 회원 정보 접근 차단)
    
    const token = await createToken(inputs)
    sessionStorage.setItem('token',token)
    sessionStorage.setItem("refreshToken", token)
    const isLogin = await signIn(inputs)

    // 이 함수는 로그인 성공시 모달 창 닫게 하기 위한 용도
    let isReturnSuccessLogin = false;
    if (isLogin) {
      const data = await userInfo();
      if (!!data) {
        alert("로그인 성공")
        setUser({
          ...user,
          uno: data?.uno,
          id: data?.id,
          role_admin: "ROLE_USER",
          userName: data?.userName,
          birthday: data?.birthday,
  
          isLogin: true // 순수 프론트엔드에서만 로그인 중인지만 확인
        })
        isReturnSuccessLogin = true;
      } else {
        alert("로그인 실패")
      }
    } else {
      alert("로그인 실패")
    }
    myPageMenuRefresh(); // 로그인 시 myPage 메뉴 default 값으로 변경
    // return data;
    return isReturnSuccessLogin;
  }

  // 2) 회원정보 다시 확인용 로그인 처리 함수 (API 호출은 필요 없다.)
  const handlerMyPageLogin = async (inputs) => {
    const isLogin = await signIn(inputs)
    if (isLogin) {
      alert("로그인 성공")
    } else {
      alert("로그인 실패")
    }
    return isLogin;
  }


  // 3) 로그아웃 함수
  const handlerLogout = () => {
    delete UseApi.defaults.headers['Authorization'];

    sessionStorage.removeItem("token")
    sessionStorage.removeItem("refresh_token");
    logout() // 로그아웃 시 state 값 초기화
    myPageMenuRefresh(); // 로그 아웃 시 myPage 메뉴 default 값 변경
  }

  // 4) 프로필 접근시 유저 조회
  const userProfile = async (id) => {
    const data = await getMyProfileUserInfo(id);
    // admin 권한 접근 제어
    if (id === 'admin' && data?.id !== user?.id) {
      alert('해당 접근 권한이 없습니다.')
      window.location.href = '/'
      return;
    }

    // 아래는 타 유저가 유저에 접근 할 때 쓰임
    setAnotherUser(data); 
  }

  // 5) 업데이트에 필요한 회원 정보 조회
  const selectUpdateUserInfoProfile = async (id) => {
    const data = await getMyProfileUserInfo(id);
    
    // 아래는 회원 정보 표시 할 때 데이터를 의미함
    // 회원 정보 및 수정 리턴 할때 씀
    // 이유 : state에 session에 저장 할 때, 비밀번호가 저장 되므로 api 호출한 결과를
    // 따로 변수 저장 할 것
    // return data
    setSelectUpdateLoginUserInfo(data)
  }


  return {handlerLogin, handlerLogout, handlerMyPageLogin, userProfile, selectUpdateUserInfoProfile}
}

export default UserContainer