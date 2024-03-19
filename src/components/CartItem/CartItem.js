import React from "react";
import s from "./CartItem.module.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART_ACTION,
  DECREASE_QUANTITY_ACTION,
  CHANGE_STATUS_ACTION,
  DELETE_FROM_CART_ACTION,
} from "../../redux/actions/types";

const CartItem = ({ item }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { mainData } = useSelector((state) => state.main);
  console.log(mainData)

  const statusOfMainData = mainData.reduce((acc, rec) => {
    if (rec.id === item.id) {
      return rec.select;
    }
    return acc;
  }, false);
  // 1200 и больше - col-xl-(2,3,4,5,6 и т.д)
  // между 1200 и 992 - col-lg-(2,3,4,5,6 и т.д)
  // между 992 и 768 - col-md-(2,3,4,5,6 и т.д)
  // между 768 и 576 - col-sm-(2,3,4,5,6 и т.д)
  // 576 и меньше - col-(2,3,4,5,6 и т.д)
  const handleAddItemView = () => {
    dispatch(ADD_TO_CART_ACTION(item));
  };
  const handleDecreaseItemView = () => {
    dispatch(DECREASE_QUANTITY_ACTION(item));
  };

  const addFavoriteView = () => {
    dispatch(CHANGE_STATUS_ACTION(item.id));
  };

  const deleteFromCart = () => {
    dispatch(DELETE_FROM_CART_ACTION(item.id));
  };

  return (
    <div
      className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1"
      id={s.cartItem}
    >
      <div className="col">
        <div className={s.cartItem__img}>
          <img src={item.img} alt="" />
        </div>
      </div>

      <div className="col">
        <div className={s.cartItem__logic}>
          <div className={s.cartItem__first}>
            <p>
              <span>{t("price")}:</span>
              {item.price}
              {t("som")}
            </p>
            <p>
              <span>{t("name")}:</span>
              {t(item.name)}
            </p>
            <p>
              <span>{t("Total")}:</span>
              {item.price * item.quantity}
            </p>
          </div>
          <div className={s.cartItem__second}>
            <RemoveIcon onClick={handleDecreaseItemView} />
            <p className={s.cartItem__quantity}>{item.quantity}</p>
            <AddIcon onClick={handleAddItemView} />
          </div>
        </div>
      </div>

      <div className="col">
        <div className={s.cartItem__icons}>
          <DeleteForeverIcon onClick={deleteFromCart} />
          <div onClick={addFavoriteView}>
            {statusOfMainData ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
