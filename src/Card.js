import axios from "axios";
import React from "react";

const Card = (props) => {
  const handleEdit = () => {
    const url = `http://localhost:3000/books/${props.item.id}`;
    axios.put(url,{title:});
  };
  const handleDelete = () => {
    const url = `http://localhost:3000/books/${props.item.id}`;
    axios.delete(url).then((res) => {
      console.log(res);
    });
    window.location.reload();
  };

  return (
    <div className="card">
      <h4 className="card-title">{props.item.title}</h4>
      <div className="card-desc">
        <p>Author: {props.item.author}</p>
        <p>Genre: {props.item.genre}</p>
      </div>
      <p className="card-summary">Summary: {props.item.summary}</p>
      <div className="card-buttons">
        <button className="btn btn-blue" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-red" type="submit" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
