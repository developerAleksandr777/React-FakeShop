import React from "react";
import s from "./Favories.module.css";
import Item from "../../components/Item/Item";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";

const Favorites = () => {
  const { mainData } = useSelector((state) => state.main);

  const items = mainData.map((item) =>
    item.select ? <Item item={item} key={item.id} /> : null
  );

  return (
    <>
      <Header title="Favorites" />
      <div id={s.favorites}>
        <div className="container">
          <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {items}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
