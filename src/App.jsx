import React  from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from "./Components/Home"
import Page from "./Components/Page"
import NotFound from "./Components/NotFound";

function App() {

  return (
    <>  
     <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/page/:id" element={<Page />} />
        <Route path="*" element={<NotFound />}  />
        
      </Routes>
     </Router>
    </>
  )
}

export default App
