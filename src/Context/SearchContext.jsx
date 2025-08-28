import React, { createContext, useEffect, useState } from "react";
import { unlistedData } from "../Data/unlistedDatas";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (value) => {
    setSearchData(value);
    const filtered = unlistedData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  useEffect(()=>{
    setFilteredData(unlistedData)
  },[])

  return (
    <SearchContext.Provider value={{ searchData, filteredData, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
