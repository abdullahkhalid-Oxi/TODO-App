import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import MapandFilter from "./components/MapandFilter";
import Home from "./components/Home";

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar title="Heromi" name="Ahmed" />
      <Textform string="Enter here" /> */}
      {/* <MapandFilter/> */}

     <Home/> 

    </>
  );
}

export default App;
