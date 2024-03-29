import React from 'react'
import styles from '../../../scss/mypage/commom/mypage.common.module.scss'
import TeacherRegisterComponent from '../../../components/mypage/teacher/register/TeacherRegisterComponent'
import { useRecoilValue } from 'recoil'
import { innerWidthState } from '../../../recoil/state/commonState'

const MyTeacherPage = () => {
  const innerWidth = useRecoilValue(innerWidthState);
  return (
    <div className={`${innerWidth >= 860 ? styles?.myPageWebContainer : styles?.myPageMobileContainer}`}>
      {/* 선생님 등록 폼 */}
      <TeacherRegisterComponent />
      

      <div>1. 선생님 등록 신청을 하지 않았을 경우 선생님 등록 메뉴로 전환</div>
      <div>2. 선생님 등록을 신청하였으면 선생님 관리</div>
      <div>3. 비로그인자는 이 메뉴를 숨기는 것으로 목표로 한다.</div>
    </div>
  )
}

export default MyTeacherPage