import { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import MapandFilter from "./components/MapandFilter";
import Firsthome from "./components/Firsthome"
import Secondhome from "./components/Secondhome"


function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar title="Heromi" name="Ahmed" />
      <Textform string="Enter here" /> */}
      {/* <MapandFilter/> */}
      
      <p>HELO</p>
     <Firsthome/> 
     {/* <Secondhome/> */}
     

    </>
  );
}

export default App;
