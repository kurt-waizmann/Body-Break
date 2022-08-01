import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Fitness from "./Fitness";
import Homepage from "./Homepage";
import AllItems from "./AllItems";
import AllBrands from "./AllBrands";
import AllCategories from "./AllCategories";
import Cart from "./Cart";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/:category" element={<Fitness />} />
          <Route exact path="/allitems" element={<AllItems />} />
          <Route exact path="/allcategories" element={<AllCategories />} />
          <Route exact path="/allbrands" element={<AllBrands />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
