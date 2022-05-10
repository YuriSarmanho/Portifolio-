import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import Testimonials from "./Components/Testimonials/Testimonials";
import Ser from "./Components/Ser/Ser";
import Portifolio from "./Components/Portifolio/Portifolio";



const App = () => {
  return (
    <>
      <Header />
      <Nav/>
      <About />
      <Experience/>
      <Contact/>
      <Footer/>
      <Testimonials/>

    </>
  );
};

export default App;
