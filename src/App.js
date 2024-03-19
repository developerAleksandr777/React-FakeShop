import React, { useState, useEffect } from "react";
import "./App.css";
import Views from "./Views";
import { DataContext } from "./Context";
import { useTranslation } from "react-i18next";
import { languages } from "./utils/constants";
import { usePageState } from "./custom hook/usePageState";

const App = () => {
  const [paginationState, setPaginationState] = usePageState();

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const getLanguage = localStorage.getItem("crm:selectedLanguage");
    if (getLanguage) {
      const initialLanguage = languages.find((el) => el.code === getLanguage);
      setSelectedLanguage(initialLanguage);
      i18n?.changeLanguage(initialLanguage?.code);
    }
  }, [i18n]);

  return (
    <DataContext.Provider
      value={{
        selectedLanguage,
        languages,
        setSelectedLanguage,
        i18n,
        paginationState,
        setPaginationState,
      }}
    >
      <Views />
    </DataContext.Provider>
  );
};

export default App;
