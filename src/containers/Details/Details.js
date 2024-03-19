import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MUICard from "../../components/MUICard/MUICard";
import s from "./Details.module.css";

const Details = () => {
  const params = useParams();
  const prodId = params.id;

  const { mainData } = useSelector((state) => state.main);

  const render = mainData.map((item) => {
    return Number(prodId) === item.id ? (
      <MUICard item={item} key={item.id} />
    ) : null;
  });

  return (
    <section id={s.details}>
      <div className="container">
        <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {render}
        </div>
      </div>
    </section>
  );
};

export default Details;
