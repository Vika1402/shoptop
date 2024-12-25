import React, { useContext } from "react";
import { jokeContext } from "../context/jokeContext";

function Contact() {
  const { data, setDate } = useContext(jokeContext);
  return (
    <div>
      <img
        className="w-full h-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdy0oRxVrAGT0xiAFg-K5XLcV1B3Zx2aXqw&s"
        alt=""
      />
    </div>
  );
}

export default Contact;
