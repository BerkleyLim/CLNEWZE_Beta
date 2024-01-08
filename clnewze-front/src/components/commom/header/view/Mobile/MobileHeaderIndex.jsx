import React, { useEffect, useState } from "react";
import styles from "../../../../../scss/main/common/header.module.scss";
import {
  Button,
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  Navbar,
} from "reactstrap";

import SelectMenuIndex from "../../dropdown/selectMemu/index";
import SelectLanguageIndex from "../../dropdown/language/index";
import LoginForm from "../../../../login/LoginFormComponent";
import { Alarm, CardList, PersonCircle } from "react-bootstrap-icons";

import headerData from "../../sampledata/data.json";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../../recoil/state/userState";
import CommonContaier from "../../../../../hooks/CommonContaier";

const MobileHeaderIndex = () => {
  const [loginIsModal, setLoginIsModal] = useState(false);
  const [mobileIsDropDown, setMobileIsDropDown] = useState(false);
  const modalToggle = () => setLoginIsModal(!loginIsModal);
  const mobileIsDropDownToggle = () => setMobileIsDropDown(!mobileIsDropDown);
  const user = useRecoilValue(userState);

  // 커스텀 훅 정의
  const { moveNavPage, moveHrefPage } = CommonContaier();

  const userMenu = () => {
    if (user.isLogin) {
      moveHrefPage("/mypage");
    } else {
      modalToggle();
    }
  };

  return (
    <>
    {/* 모바일 뷰 */}
      <Navbar className={`${styles?.hdContent1}`}>
        <div className={`${styles?.header_logo}`}>
          <a href="/">
            로고(추가예정)
            <img src="" alt="" />
          </a>
        </div>
        <ButtonDropdown
          isOpen={mobileIsDropDown}
          direction="down"
          toggle={mobileIsDropDownToggle}
        >
          <DropdownToggle color="blank" caret size="lg">
            <CardList />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => userMenu()}>
              {user?.isLogin ? user.userNm : "로그인"}
            </DropdownItem>
            {headerData?.map((data, index) => (
              <DropdownItem
                key={index}
                onClick={() => moveNavPage(data?.category)}
              >
                {data?.menuName}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </ButtonDropdown>
      </Navbar>

      {/* 로그인 모달 출력 */}
      <Modal isOpen={loginIsModal} toggle={modalToggle} centered={true}>
        <LoginForm setLoginIsModal={setLoginIsModal} />
      </Modal>
    </>
  );
};

export default MobileHeaderIndex;
