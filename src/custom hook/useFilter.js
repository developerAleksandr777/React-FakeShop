import { useSearchParams } from "react-router-dom";

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setFilters = (update) => {
    const newParams = {
      ...Object.fromEntries(searchParams.entries()),
      ...update,
    };

    Object.entries(newParams).forEach(([key, array]) => {
      if (Array.isArray(array)) {
        if (array.length > 0) {
          searchParams.set(key, array.join(","));
        } else {
          searchParams.delete(key);
        }
      } else {
        searchParams.delete(key);
      }
    });
    setSearchParams(searchParams);
  };
  const filters = {
    category: searchParams.get("category")?.split(",").map(String) || [],
  };

  return [filters, setFilters];
};
