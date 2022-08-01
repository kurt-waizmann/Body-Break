import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Entertainment from "./Entertainment";
import Fitness from "./Fitness";
import Homepage from "./Homepage";
import Lifestyle from "./Lifestyle";
import Medical from "./Medical";
import AllItems from "./AllItems";
import AllBrands from "./AllBrands";
import AllCategories from "./AllCategories";
import Cart from "./Cart";
import OrderForm from "./OrderForm";
import ConfirmationPage from "./ConfirmationPage";

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
          <Route exact path="/orderform" element={<OrderForm />} />
          <Route exact path="/confirmationpage" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
