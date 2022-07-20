import React from "react";
import { Input, Select, InputAdornment } from "@mui/material";
import { Filter } from "@mui/icons-material";

const Filters = ({
  searchValue,
  onSearchValueChange,
  filters,
  setActiveFilter,
}) => (
  <>
    <Input
      name="filter"
      placeholder="Filter"
      value={searchValue ?? ""}
      onChange={({ target: { value } }) => onSearchValueChange(value)}
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <Filter />
        </InputAdornment>
      }
    />

    <Select
      onChange={({ target: { value } }) => setActiveFilter(value)}
      defaultValue=""
      native
      variant="standard"
    >
      <option value="">#NoFilter</option>
      {filters.map((f) => (
        <option key={f.value} value={f.value}>
          {f.label}
        </option>
      ))}
    </Select>
  </>
);

export default Filters;
