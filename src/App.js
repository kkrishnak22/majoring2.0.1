import "./App.css";
import About from "./pages/About";
import Slider1 from "./img/slider-1.jpg";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

import { UserProvider } from "./context/UserProvider";
function App() {
  return (
    <UserProvider>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route  path="/majoring2.0.1" element={<HomePage />} />
          <Route path="/editor" element={<Landing />} />

          <Route path="/about" element={<About />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/signin" element={<Signin />} />
        </Routes>

        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
