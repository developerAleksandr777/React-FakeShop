import React, { useState, useEffect, useContext, useMemo } from "react";
import s from "./Main.module.css";
import { useSelector } from "react-redux";
import Item from "../../components/Item/Item";
import Pagination from "../../components/Pagination/Pagination";
import { DataContext } from "../../Context";
import AntdInput from "../../components/AntdInput/AntdInput";
import AntModal from "../../components/AntModal/AntModal";
import { useFilters } from "../../custom hook/useFilter";
import AntButton from "../../components/AntButton/AntButton";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import SortWrapperHoc from "../../hoc/SortWrapperHoc";

const Main = () => {
  const { t } = useTranslation();

  const [sortType, setSortType] = useState("price");
  const [sortDirection, setSortDirection] = useState("asc");

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [loader, setLoader] = useState(true);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const { mainData } = useSelector((state) => state.main);
  const { paginationState, setPaginationState } = useContext(DataContext);
  const [filter] = useFilters();

  const arrayOfCategories = mainData.map((el) => {
    return [el.category];
  });
  const newArr = arrayOfCategories.flat(Infinity);
  const arrayGoodCategory = new Set(newArr);

  useEffect(() => {
    setPosts(mainData);
    setLoader(false);
  }, [mainData]);

  const handlePaginationChange = (page) => {
    setPaginationState({ page: page });
    setCurrentPage(page);
  };

  const handleSearch = (search) => {
    setPaginationState({ search, page: 1 });
  };

  const newFilteredState = useMemo(() => {
    return currentPosts
      .filter((el) => {
        const checkValue = !el.name
          .toLowerCase()
          .includes(paginationState.search.toLowerCase());
        if (paginationState.search && checkValue) return false;
        const checkBox = !filter.category?.includes(el.category);
        if (filter.category?.length > 0 && checkBox) return false;
        return true;
      })
      .sort((a, b) => {
        switch (sortType) {
          case "name":
            return sortDirection === "asc"
              ? a.name.localeCompare(b.name)
              : b.name.localeCompare(a.name);

          default:
            return sortDirection === "asc"
              ? a.price - b.price
              : b.price - a.price;
        }
      });
  }, [
    paginationState.search,
    currentPosts,
    filter.category,
    sortType,
    sortDirection,
  ]);

  const handleSortToggle = (type) => {
    setSortType(type);
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    setPaginationState({
      ...paginationState,
      sortType: type,
      sortDirection: sortDirection === "asc" ? "desc" : "asc",
    });
  };

  const items = newFilteredState.map((item) => (
    <Item item={item} key={item.id} />
  ));

  return (
    <>
      <Header title="Home" />
      <section id={s.home}>
        <div className="container">
          <SortWrapperHoc>
            <AntdInput
              handleSearch={handleSearch}
              paginationState={paginationState}
              placeholder={t("Search by title")}
            />
            <AntButton
              func={() => handleSortToggle("price")}
              type="button"
              title={`${t("Sort by Price")} ${
                sortType === "price"
                  ? sortDirection === "asc"
                    ? "↑"
                    : "↓"
                  : ""
              }`}
            />
            <AntButton
              func={() => handleSortToggle("name")}
              type="button"
              title={`${t("Sort by Name")} ${
                sortType === "name" ? (sortDirection === "asc" ? "↑" : "↓") : ""
              }`}
            />

            <AntModal arrayGoodCategory={arrayGoodCategory} title="Filter" />
          </SortWrapperHoc>

          <div className="row gy-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {items}
          </div>
          <Pagination
            loader={loader}
            postPerPage={postPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handlePaginationChange={handlePaginationChange}
            paginationState={paginationState}
          />
        </div>
      </section>
    </>
  );
};

export default Main;
