import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mylist from "../pages/Mylist";
import Noodle from "../pages/Noodle"
import Navbar from "./Navbar";
function App() {
	return (
<BrowserRouter>  
	  <Routes>
      <Route path="/" element={<Noodle />} />
      <Route path="/Mylist" element={<Mylist />} /> 
		  <Route path="/Noodle" element={<Noodle />} /> 
      </Routes>
    </BrowserRouter>	)
}

export default App