import React, { useState } from "react";
import s from "./Item.module.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  ADD_TO_CART_ACTION,
  CHANGE_STATUS_ACTION,
} from "../../redux/actions/types";
import { useNavigate } from "react-router-dom";
import MUIAlert from "../MUIAlert/MUIAlert";
import { useTranslation } from "react-i18next";
import WrapperHocItem from "../../hoc/WrapperHocItem";

const Item = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${item.id}`);
  };

  const dispatch = useDispatch();

  const addItemView = (e) => {
    e.stopPropagation();
    setVisible(true);
    dispatch(ADD_TO_CART_ACTION(item));
  };

  const addFavoriteView = () => {
    dispatch(CHANGE_STATUS_ACTION(item.id));
  };

  return (
    <div className="col">
      <div className={s.item__box} onDoubleClick={handleNavigate}>
        <img src={item.img} alt="" />
        <div className="wrap__item__info">
          <p>{t(item.name)}</p>
          <p>{t(item.price)}</p>
        </div>

        <WrapperHocItem>
          <Button
            onClick={addItemView}
            style={{
              width: "50%",
            }}
            variant="contained"
          >
            {t("ADD TO CART")}
          </Button>
          <div onClick={addFavoriteView}>
            {item.select ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </div>
        </WrapperHocItem>

        <MUIAlert
          displayTime={1500}
          message={t(item.name)}
          visible={visible}
          setVisible={setVisible}
          price={item.price}
          className="alert"
        />
      </div>
    </div>
  );
};

export default Item;
