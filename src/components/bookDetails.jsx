import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [bookData, setBookData] = useState(null);
  const params = useParams();

  useEffect(() => {
    //request from url parameters
    //respond moved to the new state
    axios
      .get(`http://localhost:3030/books/${params.bookId}`)
      .then((res) => setBookData(res.data));
  }, []);

  if (!bookData) return "Loading...";

  return (
    <div className="detail-page">
      <div className="book-detail">
        <img src={bookData.image} />
        <div className="right">
          <h1>{bookData.title}</h1>
          <h2>{bookData.author}</h2>
          <p>Year: {bookData.year}</p>
          <p>
            Summary: <br />
            {bookData.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
