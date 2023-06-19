import React from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../services/axiosInstance";
import Search from "../Search";
import "./BookList.css";

export default function BookList() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const setSearchCriteria = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  useEffect(() => {
    axiosInstance("GET", "/products", setProducts);
  }, [searchValue]);

  return (
    <div className="book-list">
      <Search setSearchCriteria={setSearchCriteria} />
      {products.products && (
        <ul>
          {products.products.map((item) => {
            if (item.title.toLowerCase().includes(searchValue.toLowerCase())) {
              console.log(searchValue);
              return <li>{item.title}</li>;
            }
          })}
        </ul>
      )}
    </div>
  );
}
