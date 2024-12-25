import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { jokeContext } from "./context/jokeContext";
import fetchApi from "./Service/fetchApi";

function App() {
  const [data, setdate] = useState(null);

  useEffect(() => {
    async function getJoke() {
      try {
        const joke = await fetchApi();
        setdate(joke);
        console.log(joke);
      } catch (error) {
        console.error("Error setting joke data:", error);
      }
    }
    getJoke();
  }, []);

  return (
    <>
      <jokeContext.Provider value={{ data, setdate }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </jokeContext.Provider>
    </>
  );
}

export default App;