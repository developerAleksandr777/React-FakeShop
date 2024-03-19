import React from "react";
import Button from "@mui/material/Button";

const MUIButton = ({ title, func }) => {
  return (
    <Button variant="outlined" onClick={func}>
      {title}
    </Button>
  );
};

export default MUIButton;
