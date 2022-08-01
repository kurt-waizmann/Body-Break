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

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/fitness" element={<Fitness />} />
          <Route exact path="/medical" element={<Medical />} />
          <Route exact path="/lifestyle" element={<Lifestyle />} />
          <Route exact path="/entertainment" element={<Entertainment />} />
          <Route exact path="/allitems" element={<AllItems />} />
          <Route exact path="/allcategories" element={<AllCategories />} />
          <Route exact path="/allbrands" element={<AllBrands />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

