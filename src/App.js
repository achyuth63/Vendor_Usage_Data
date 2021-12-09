import React from "react";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Piechart from "./components/Piechart";

import "./App.css"

const App = () => {
    return(
        <>
        
            <Menubar />
            <div className="main">
            <Navbar/>
            <Piechart/>
            <Footer/>
            </div>
      </>
    )
}

export default App;