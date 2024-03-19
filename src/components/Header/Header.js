import React, { useState } from "react";
import s from "./Header.module.css";
import BadgeCart from "../BadgeCart/BadgeCart";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Translate from "../Translate/Translate";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../custom hook/useTheme";
import { Switch } from "antd";

const Header = ({ title }) => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const handleThemeChange = (checked) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className={s.header__nav}>
            <h2 className="header__logo">{t(title)}</h2>
            <div className={s.header__cart}>
              <Link to="/">{t("Home")}</Link>
              <Link to="/favorites">{t("Favorites")}</Link>
              <BadgeCart handleToggle={handleToggle} />
              <Translate />
              <Switch checked={theme === "dark"} onChange={handleThemeChange} />
            </div>
          </div>
        </div>
      </header>
      <Cart toggle={toggle} handleToggle={handleToggle} />
    </>
  );
};

export default Header;
