import React from "react";
import s from "./Cart.module.css";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Cart = ({ toggle, handleToggle }) => {
  const { t } = useTranslation();
  const { cart } = useSelector((state) => state.cart);
  const cartItems = cart.map((item) => <CartItem item={item} key={item.id} />);

  const totalPrice = cart.reduce(
    (acc, rec) => acc + rec.price * rec.quantity,
    0
  );

  return (
    <div className={toggle ? `${s.cart__modal} ${s.show}` : s.cart__modal}>
      <h2 className={s.cartText}>{t("CART")}</h2>
      <div className={s.cart__wrap}>
        <p className="cart__info">
          {t("Total price")} {totalPrice} {t("som")}
        </p>
        <div onClick={handleToggle} className={s.cart__exit}>
          <CloseIcon />
        </div>
      </div>

      <div className={s.cart__content}>{cartItems}</div>
    </div>
  );
};

export default Cart;
