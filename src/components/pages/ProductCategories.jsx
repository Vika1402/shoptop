import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCategoriesDetails from "./ProductCategoriesDetails";

function ProductCategories() {
  const [data, setData] = useState([]);
  async function fetchApi() {
    try {
      const apiResponce = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const Responnse = await apiResponce.json();
      setData(Responnse);
      console.log(Responnse);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="flex justify-evenly mt-10">
      {data &&
        data.map((item) => {
          return (
            <>
              <ul className="menu menu-vertical lg:menu-horizontal border border-gray-300 mb-10 text-black text-xl">
                <li>
                  <Link to={`/categories/${item}`}>{item}</Link>
                </li>
              </ul>
          
            </>
          );
        })}
     
    </div>
  );
}

export default ProductCategories;
