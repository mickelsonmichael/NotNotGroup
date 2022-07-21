import { useMemo, useState } from "react";

const useTableState = (items) => {
  const [searchValue, setSearchValue] = useState("");

  const [state, setState] = useState({
    page: 0,
    itemsPerPage: 10,
  });

  const handleSearchValueChange = setSearchValue;

  const setPageSize = (pageSize) =>
    setState((st) => ({
      ...st,
      itemsPerPage: pageSize < 1 ? items.length : pageSize,
      page: 0,
    }));

  const setPage = (page) => setState((st) => ({ ...st, page: page }));

  const { page, itemsPerPage } = state;

  const visibleItems = useMemo(
    () => items.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage),
    [items, page, itemsPerPage]
  );

  return {
    ...state,
    searchValue,
    visibleItems,
    handleSearchValueChange,
    setPageSize,
    setPage,
  };
};

export default useTableState;
