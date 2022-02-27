import React from "react";
import Card from "./Card.js";

const List = ({ books }) => {
  return (
    <div className="list">
      {books.data?.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
};

export default List;
