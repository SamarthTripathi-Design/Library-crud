import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    let formJSON = {
      title: title,
      author: author,
      genre: genre,
      summary: summary,
    };
    const url = "http://localhost:3000/books";
    axios
      .post(url, formJSON)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addbooks">
      <h1 className="book-headings">Add Books</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="addBooks-label">
          Title
        </label>
        <br />
        <input
          type="text"
          className="addBooks-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="" className="addBooks-label">
          Author
        </label>
        <br />
        <input
          type="text"
          className="addBooks-input"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="" className="addBooks-label">
          Genre
        </label>
        <br />
        <input
          type="text"
          className="addBooks-input"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="" className="addBooks-label">
          Summary
        </label>{" "}
        <br />
        <input
          type="text"
          className="addBooks-input"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <br />
        <button className="addbook-btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
