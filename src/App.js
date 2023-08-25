import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import CharInfo from "./pages/CharInfo";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/charinfo/:id" element={<CharInfo />} />
      </Routes>
    </div>
  );
}

export default App;
