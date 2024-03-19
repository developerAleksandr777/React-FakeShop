import React, { useContext } from "react";
import { Menu, Dropdown } from "antd";
import { DataContext } from "../../Context";

const Translate = () => {
  const { selectedLanguage, setSelectedLanguage, i18n, languages } =
    useContext(DataContext);

  const handleLanguageChange = (value) => {
    const { key } = value;
    const newSelectedLanguage = languages.find((el) => el.code === key);
    setSelectedLanguage(newSelectedLanguage);
    console.log(newSelectedLanguage.code);
    i18n.changeLanguage(newSelectedLanguage.code);
    localStorage.setItem("crm:selectedLanguage", newSelectedLanguage.code);
  };

  const menu = (
    <Menu onClick={handleLanguageChange}>
      {languages.map((el) => (
        <Menu.Item key={el.code}>{el.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <p>
        {selectedLanguage ? selectedLanguage.label : selectedLanguage.label}
      </p>
    </Dropdown>
  );
};

export default Translate;
