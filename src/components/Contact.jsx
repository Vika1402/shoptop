import React, { useContext } from "react";
import { jokeContext } from "../context/jokeContext";

function Contact() {
  const { data, setDate } = useContext(jokeContext);
  return <div></div>;
}

export default Contact;
