import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Entertainment from "./Entertainment";
import Fitness from "./Fitness";
import Homepage from "./Homepage";
import Lifestyle from "./Lifestyle";
import Medical from "./Medical";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/fitness" element={<Fitness />} />
          <Route exact path="/medical" element={<Medical />} />
          <Route exact path="/lifestyle" element={<Lifestyle />} />
          <Route exact path="/entertainment" element={<Entertainment />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
