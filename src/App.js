import { Routes, Route } from "react-router"

import NavBar from "./components/nav/navbar";
import Cover from "./components/cover/cover";
import Proyects from "./components/proyects/proyects";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Cover />} />
          <Route path="proyects" element={<Proyects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
