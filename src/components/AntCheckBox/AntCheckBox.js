import React from "react";
import { Checkbox } from "antd";

const AntCheckBox = ({ optionOfCheckbox, handleCategories, value }) => {
  return (
    <Checkbox.Group
      options={optionOfCheckbox}
      onChange={handleCategories}
      value={value}
    />
  );
};

export default AntCheckBox;
