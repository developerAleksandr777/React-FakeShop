import React from "react";
import { Collapse } from "antd";
import AntCheckBox from "../AntCheckBox/AntCheckBox";
import { useFilters } from "../../custom hook/useFilter";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;

const AntAccordion = ({ arrayGoodCategory, titleOfPanel }) => {
  const { t } = useTranslation();

  const [filters, setFilters] = useFilters();

  const categoties = [...arrayGoodCategory];

  const handleCategories = (category) => {
    setFilters({ category: category });
  };

  const optionOfCheckbox = categoties.map((el) => ({
    label: t(el),
    value: el,
  }));

  return (
    <Collapse>
      <Panel header={t(titleOfPanel)} key="1">
        <AntCheckBox
          optionOfCheckbox={optionOfCheckbox}
          handleCategories={handleCategories}
          value={filters.category}
        />
      </Panel>
    </Collapse>
  );
};

export default AntAccordion;
