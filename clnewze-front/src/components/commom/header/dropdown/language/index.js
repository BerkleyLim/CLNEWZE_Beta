import React from "react";
import SelectLanguageDropdown from "./dropdown";
import styles from "../../../../../scss/common/main/common/header.module.scss";

const LanguageIndex = () => {
  return (
    <div className={`${styles?.header_language}`}>
      <SelectLanguageDropdown />
    </div>
  );
};

export default LanguageIndex;
