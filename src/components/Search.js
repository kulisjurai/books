import React from "react";

export default function Search({ setSearchCriteria }) {
  return (
    <div>
      <input type="text" onChange={setSearchCriteria} />
    </div>
  );
}
