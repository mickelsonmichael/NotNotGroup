import React, { useState, useMemo, useContext, createContext, useEffect } from "react";

const FancyContext = createContext({
  searchValue: "",
  filters: [],
  page: 0,
  itemsPerPage: 25,
  visibleItems: [],
  onSearchValueChange: () => null,
  setActiveFilter: () => null,
  handleSearchValueChange: () => null,
  setPageSize: () => null,
  setPage: () => null,
});

const FancyTableContextProvider = ({
  children,
  filters,
  items,
  columns,
  expandItem,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const [state, setState] = useState({
    page: 0,
    itemsPerPage: 10,
    activeFilter: null,
  });

  const handleSearchValueChange = (value) => {
    setSearchValue(value);

    if (page > 0) {
      setState(s => ({ ...s, page: 0 }));
    }
  }

  const setPageSize = (pageSize) =>
    setState((st) => ({
      ...st,
      itemsPerPage: pageSize < 1 ? items.length : pageSize,
      page: 0,
    }));

  const setPage = (page) => setState((st) => ({ ...st, page: page }));

  const { page, itemsPerPage, activeFilter } = state;
  const searchRegex = useMemo(
    () => (searchValue === "" ? null : new RegExp(searchValue, "i")),
    [searchValue]
  );

  const setActiveFilter = (filter) =>
    setState((s) => ({ ...s, activeFilter: filter }));

  const effectiveItems = useMemo(
    () =>
      items.filter(
        (item) =>
          Object.keys(item).some(
            (key) =>
              searchRegex == null ||
              (typeof item[key] === "string" && item[key].match(searchRegex))
          ) &&
          (activeFilter == null || filters[activeFilter] == null || filters[activeFilter](item))
      ),
    [items, searchRegex, activeFilter]
  );

  const visibleItems = useMemo(
    () =>
      effectiveItems.slice(
        page * itemsPerPage,
        page * itemsPerPage + itemsPerPage
      ),
    [effectiveItems, page, itemsPerPage]
  );

  return (
    <FancyContext.Provider
      value={{
        ...state,
        columns,
        expandItem,
        filters,
        searchValue,
        items,
        visibleItems,
        effectiveItems,
        handleSearchValueChange,
        setActiveFilter,
        setPageSize,
        setPage,
      }}
    >
      {children}
    </FancyContext.Provider>
  );
};

const useFancyTableContext = () => useContext(FancyContext);

export { useFancyTableContext };
export default FancyTableContextProvider;
