import React from "react";
import { Input } from "antd";
const AntdInput = ({ handleSearch, paginationState, placeholder }) => (
  <Input
    placeholder={placeholder}
    onChange={(e) => handleSearch(e.target.value)}
    value={paginationState.search}
    style={{
      width: "20%",
    }}
  />
);
export default AntdInput;
