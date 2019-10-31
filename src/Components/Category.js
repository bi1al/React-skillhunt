import React from "react";

function Category({ title, amount }) {
  return (
    <div className="category">
      <div>
        <h3>{title}</h3>
        <div>
          <p>
            <span>{amount}</span> Open position
          </p>
        </div>
      </div>
    </div>
  );
}

export default Category;
