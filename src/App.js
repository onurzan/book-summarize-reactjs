import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/mainPage";
import ProductsPage from "./pages/productsPage";
import BookDetails from "./components/bookDetails";
import UndefinedPage from "./pages/undefinedPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<ProductsPage />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="*" element={<UndefinedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
