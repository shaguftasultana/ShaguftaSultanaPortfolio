import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "../src/components";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <About />
      <Experience />

      <Works />
      <Contact />
      <StarsCanvas />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
