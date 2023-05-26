import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../src/components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
      <StarsCanvas />
    </BrowserRouter>
  );
};

export default App;
