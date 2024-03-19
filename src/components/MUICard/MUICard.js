import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_STATUS_ACTION } from "../../redux/actions/types";
import { useNavigate } from "react-router-dom";
import MUIButton from "../MUIButton/MUIButton";
import { useTranslation } from "react-i18next";

export default function MUICard({ item }) {
  const { t } = useTranslation();
  const { mainData } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const statusOfMainData = mainData.reduce((acc, rec) => {
    if (rec.id === item.id) {
      return rec.select;
    }
    return acc;
  }, false);

  const addFavoriteView = () => {
    dispatch(CHANGE_STATUS_ACTION(item.id));
  };

  const handleHome = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (item.id === mainData.length) {
      navigate(`/${(item.id = mainData.length)}`);
    } else {
      navigate(`/${item.id + 1}`);
    }
  };

  const handlePrev = () => {
    if (item.id === 1) {
      navigate(`/${(item.id = 1)}`);
    } else {
      navigate(`/${item.id - 1}`);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={`${t("name")}: ${t(item.name)}`}
        subheader={`${t("price")}: ${item.price} ${t("som")}`}
      />
      <CardMedia
        component="img"
        height="200"
        image={item.img}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {t(item.descr)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={addFavoriteView}>
          {statusOfMainData ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <MUIButton func={handleHome} title={t("Back to home")} />
        <MUIButton func={handlePrev} title={t("Prev")} />
        <MUIButton func={handleNext} title={t("Next")} />
      </CardActions>
    </Card>
  );
}
