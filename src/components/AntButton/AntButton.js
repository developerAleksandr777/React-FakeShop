import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const AntButton = ({ func, type, title }) => {
  const { t } = useTranslation();
  return (
    <Button onClick={func} type="primary">
      {t(title)}
    </Button>
  );
};

export default AntButton;
