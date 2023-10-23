import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Category from "./pages/Category";
import Navbar from "./components/Navbar"
import SingleCategory from "./pages/SingleCategory";
import SingleJob from "./pages/SingleJob";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import Signin from "./pages/Signin";
import MyJobs from "./components/MyJobs";
function App() {
  const [render, setRender] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(
      localStorage.getItem("beekin_user_cred")
        ? localStorage.getItem("beekin_user_cred")
        : null
    );

    if (user?.user) {
      setUser(user);
    }
  }, [render]);
  return (
   <div>
    <Navbar user={user} setRender={setRender} setUser={setUser} />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/signup" element={<Signup setRender={setRender}/>}/>
    <Route path="/signin" element={<Signin setRender={setRender}/>}/>
    <Route path="/categories" element={<Category />}/>
    <Route path="/category/:categoryName" element={<SingleCategory />}/>
    <Route path="/job/:jobId" element={<SingleJob />}/>
    <Route path="/myjobs" element={<MyJobs />}/>
   </Routes>
   </div>
  );
}

export default App;
