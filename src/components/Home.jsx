import React, { useContext, useEffect } from "react";
import { jokeContext } from "../context/jokeContext";
import { Link } from "react-router-dom";

function Home() {
  const { data } = useContext(jokeContext);
  if (data) {
    console.log(data.map((item) => item.id));
  }

  return (
    <div className="flex flex-wrap justify-evenly ">
      {data &&
        data.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="card  w-96 h-auto shadow-xl border-light-300  mt-10 "
            >
              <figure>
                <img
                  className="object-center object-contain  w-[20rem] h-[20rem]"
                  src={item.image}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>

                <div className="card-actions  flex justify-between">
                  <div className="badge badge-outline">{item.category}</div>
                  <div>
                    Rating Count :{" "}
                    <div className="badge badge-outline">
                      {item?.rating?.count}
                    </div>
                  </div>
                  <div>
                    Rating rate :{" "}
                    <div className="badge badge-outline">
                      {item?.rating?.rate}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default Home;
