import "./App.css";
import BookCard from "./Components/BookCard";
import Pagination from "./Components/Pagination";
import { useState, useEffect } from "react";
import { BOOKDATAURL } from "./constants";
import NoOfEntries from "./Components/NoOfEntries";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const body = {
      page: currentPage,
      itemsPerPage: itemsPerPage,
    };
    getBookData(BOOKDATAURL, body).then((data) => setBooks(data["books"]));
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleItemsPerPageChange = (event, value) => {
    setItemsPerPage(value.props.value);
  };

  async function getBookData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div className="App">
      <div className="main">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.book_title}
            authors={book.book_author}
            pages={book.book_pages}
            year={book.book_publication_year}
            country={book.book_publication_country}
            city={book.book_publication_city}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Pagination currentPage={currentPage} onChange={handlePageChange} />
        <NoOfEntries
          itemsPerPage={itemsPerPage}
          handleItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>
    </div>
  );
}

export default App;
