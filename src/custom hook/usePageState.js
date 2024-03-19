import { useSearchParams } from "react-router-dom";

export const usePageState = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultParams = {
    page: 1,
    search: "",
    sortType: "Price",
    sortDirection: "asc",
  };

  const currentPage = Number(searchParams.get("page")) || defaultParams.page;
  const currentSearch = searchParams.get("search") || defaultParams.search;
  const currentPrice = searchParams.get("sortPrice") || defaultParams.sortType;
  const currentAlphabit =
    searchParams.get("sortAlphabit") || defaultParams.sortDirection;

  const setPage = (newParams) => {
    setSearchParams((prevParams) => {
      const allParams = Array.from(prevParams.entries()).reduce(
        (acc, [key, value]) => {
          return { ...acc, [key]: value };
        },
        {}
      );
      const finalParams = { ...allParams, ...newParams };
      const cleanedParams = removeDefaultParams(finalParams, defaultParams);
      return cleanedParams;
    });
  };
  const removeDefaultParams = (params, defaultParams) => {
    const cleanedParams = { ...params };
    for (const [key, value] of Object.entries(defaultParams)) {
      if (cleanedParams[key] === value) {
        delete cleanedParams[key];
      }
    }
    return cleanedParams;
  };

  const collection = {
    page: currentPage,
    search: currentSearch,
    sortType: currentPrice,
    sortDirection: currentAlphabit,
  };

  return [collection, setPage];
};
