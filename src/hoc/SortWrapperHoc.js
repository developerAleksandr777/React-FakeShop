import React from "react";
import s from "./hoc.module.css";

const SortWrapperHoc = ({ children }) => {
  return <div className={s.sortWrapperHoc}>{children}</div>;
};

export default SortWrapperHoc;
