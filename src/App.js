import "./App.css";
import Nav from "./Nav.js";
import List from "./List";
import AddBooks from "./AddBooks";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const url = "http://localhost:3000/books";
    await axios.get(url).then((response) => {
      setBooks(response);
    });
    // catch((errors) => {
    //   console.log(errors);
  };

  return (
    <div className="App">
      <Nav />
      <div className="app-body">
        <List books={books} />
        <AddBooks />
      </div>
    </div>
  );
}

export default App;
