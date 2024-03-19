import React from "react";
import s from "./hoc.module.css";

const WrapperHocItem = ({ children }) => {
  return <div className={s.wrapperHocItem}>{children}</div>;
};

export default WrapperHocItem;
