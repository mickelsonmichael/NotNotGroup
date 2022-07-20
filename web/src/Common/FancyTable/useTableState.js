import { useState } from "react";

const useTableState = () => {
  const [searchValue, setSearchValue] = useState("");

  const [state, setState] = useState({
    page: 0,
    itemsPerPage: 10,
  });

  const handleSearchValueChange = setSearchValue;

  const setPageSize = (pageSize) =>
    setState((st) => ({
      ...state,
      questsPerPage: pageSize < 1 ? allQuests.length : pageSize,
      page: 0,
    }));

  const setPage = (page) => setState((st) => ({ ...st, page: page }));

  return {
    ...state,
    searchValue,
    handleSearchValueChange,
    setPageSize,
    setPage,
  };
};

export default useTableState;
