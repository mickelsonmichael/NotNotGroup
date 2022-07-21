import React from "react";
import { Input, Select, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useFancyTableContext } from "./FancyTableContext";

const FancyFilters = () => {
  const { filters, searchValue, setActiveFilter, handleSearchValueChange } =
    useFancyTableContext();

  return (
    <>
      <Input
        name="filter"
        placeholder="Filter"
        value={searchValue ?? ""}
        onChange={({ target: { value } }) => handleSearchValueChange(value)}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />

      {filters && (
        <Select
          onChange={({ target: { value } }) => setActiveFilter(value)}
          defaultValue=""
          native
          variant="standard"
        >
          <option value="">#NoFilter</option>
          {Object.keys(filters).map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </Select>
      )}
    </>
  );
};
export default FancyFilters;
