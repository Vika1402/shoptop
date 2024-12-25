import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Home from "../Home";

function ProductDetailPage() {
  const { id } = useParams();

  const [data, setdate] = useState();
  async function fetchApi() {
    try {
      const apiResponce = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const Responnse = await apiResponce.json();
      setdate(Responnse);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    fetchApi();
  }, [id]);

  console.log(data);
  return (
    <>
      {data && (
        <div className="mt-10 flex m-10">
          <div className="card card-side shadow-md flex-col md:flex-row items-center">
            <figure className="w-[60%] lg:w-[70%]">
              <img src={data?.image} alt={data.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <div className="card-actions  flex justify-between">
                <div className="badge badge-outline">{data.category}</div>
                <div>
                  Rating Count :{" "}
                  <div className="badge badge-outline">
                    {data?.rating?.count}
                  </div>
                </div>
                <div>
                  Rating rate :{" "}
                  <div className="badge badge-outline">
                    {data?.rating?.rate}
                  </div>
                </div>
              </div>
              <p className="w-[50%] mt-10">{data?.description}</p>

              <p className="text-2xl font-bold text-blue-500">
                Rs. {data.price}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Home />
    </>
  );
}

export default ProductDetailPage;
