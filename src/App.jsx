import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Category from "./pages/Category";
import Navbar from "./components/Navbar"
import SingleCategory from "./pages/SingleCategory";
import SingleJob from "./pages/SingleJob";
function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/categories" element={<Category />}/>
    <Route path="/category/:categoryName" element={<SingleCategory />}/>
    <Route path="/job/:jobId" element={<SingleJob />}/>
   </Routes>
   </div>
  );
}

export default App;
