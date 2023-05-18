import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/productCard";

const ProductsPage = () => {
  const [bookState, setBookState] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3030/books").then((res) => {
      setBookState(res.data);
    });
  }, []);

  //if the request from api has a problem print
  if (!bookState) return "Loading...";

  return (
    <div className="container">
      <h1>
        What was your favorite book? <br /> Let's remember...
      </h1>
      <div className="cards-container">
        {bookState.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
