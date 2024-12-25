import React, { useContext, useEffect } from "react";
import { jokeContext } from "../context/jokeContext";

function Home() {
  const { data } = useContext(jokeContext);
  if (data) {
    console.log(data.map((item) => item.id));
  }

  return (
    <div>
      {data &&
        data.map((item) => {
          return <div>{item.id}</div>;
        })}
    </div>
  );
}

export default Home;
