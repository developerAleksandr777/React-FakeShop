import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import "./MUIAlert.css";

const MUIAlert = ({ displayTime, message, price, setVisible, visible }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (visible) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, displayTime);
      return () => clearTimeout(timer);
    }
  }, [displayTime, visible, setVisible]);

  if (!visible) {
    return null;
  }
  return (
    <Stack
      sx={{
        width: "100%",
        position: "fixed",
        top: "5%",
        right: "50%",
        transform: "translate(50%, 50%)",
        zIndex: "2",
      }}
      spacing={2}
      className="alert"
    >
      <Alert variant="filled" severity="success">
        {t("Add")}:
        <p>
          <span>
            {t("name")}: {t(message)} | {t("price")}: {price}
          </span>
        </p>
      </Alert>
    </Stack>
  );
};

export default MUIAlert;
