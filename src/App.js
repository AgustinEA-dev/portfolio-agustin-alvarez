import { Routes, Route } from "react-router"

import NavBar from "./components/navBar/navBar.component";
import Proyects from "./components/proyects/proyects.component";
import Cover from "./components/cover/cover.component";
import About from "./components/about/about.component";
import Education from "./components/education/educacion.component";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Cover />} />
          <Route path="proyects" element={<Proyects />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


