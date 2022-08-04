import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import CategoryComponent from "./CategoryComponent";
import Homepage from "./Homepage";
import Cart from "./Cart";
import Footer from "./Footer";
import OrderForm from "./OrderForm";
import ConfirmationPage from "./ConfirmationPage";
import SearchComponent from "./SearchComponent";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/:category" element={<CategoryComponent />} />
          <Route exact path="/SearchComponent" element={<SearchComponent />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/orderform" element={<OrderForm />} />
          <Route
            exact
            path="/confirmationpage"
            element={<ConfirmationPage />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
