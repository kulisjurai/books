import React from "react";

export default function Search({ setBooksSearchCriteria }) {
  return (
    <div>
      <input type="text" onChange={setBooksSearchCriteria} />
    </div>
  );
}
