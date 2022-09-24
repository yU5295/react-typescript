import { Route, Routes } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
