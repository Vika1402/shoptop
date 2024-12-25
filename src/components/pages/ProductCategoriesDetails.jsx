import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCategories from "./ProductCategories";

function ProductCategoriesDetails() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  console.log(id);
  async function fetchApi() {
    try {
      const apiResponce = await fetch(
        `https://fakestoreapi.com/products/category/${id}`
      );
      const Responnse = await apiResponce.json();
      setData(Responnse);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    fetchApi();
  }, [id]);

  if (data) {
    console.log(data);
  }

  return (
    <div className="bg-white h-[100vh] w-full">
      <ProductCategories />
      <div className="flex justify-evenly bg-white flex-wrap ">
        {data &&
          data.map((item) => {
            return (
              <div className="card  w-96 h-[30rem] shadow-xl mt-5">
                <figure>
                  <img
                    className="object-contain object-center w-[100%] h-[100%]"
                    src={item.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {item.title}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p className="font-bold text-xl text-blue-500">
                    Rs. {Math.floor(item.price * 67)}
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductCategoriesDetails;
