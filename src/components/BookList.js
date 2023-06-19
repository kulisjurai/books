import React from "react";
import { useEffect, useState } from "react";
import { axiosInstance } from "./services/axiosInstance";
import Search from "./Search";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const setBooksSearchCriteria = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  useEffect(() => {
    axiosInstance("GET", "/products", setBooks);
  }, [searchValue]);

  return (
    <div className="book-list">
      <Search setBooksSearchCriteria={setBooksSearchCriteria} />
      {books.products && (
        <ul>
          {books.products.map((book) => {
            if (book.title.includes(searchValue)) {
              console.log(searchValue);
              return <li>{book.title}</li>;
            }
          })}
        </ul>
      )}
    </div>
  );
}
