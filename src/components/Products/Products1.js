import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductDetailsFromDb } from "../../firebase/tables/Products";

const Products1 = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    async function getProductDetails() {
      setProductDetails([]); //I have explicitly set it empty, so that there is no previous state stored (to avoid duplicate cards on screen)
      const productData = await getProductDetailsFromDb();
      productData.forEach((product) => {
        setProductDetails((prv) => [...prv, { ...product.data() }]);
      });
    }
    getProductDetails();
  }, []);

  return (
    <>
      {productDetails.map((product, index) => (
        <article
          class="relative flex flex-col overflow-hidden rounded-lg border"
          key={index}
        >
          <div class="aspect-square overflow-hidden">
            <img
              class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
              src={product.image}
              alt=""
            />
          </div>
          <div class="absolute top-0 m-2 rounded-full bg-white">
            <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
              CATEGORY: {product.category}
            </p>
          </div>
          <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
            <div class="mb-2 flex">
              <p class="mr-3 text-sm font-semibold">{product.price}</p>
              <del class="text-xs text-gray-400"> $79.00 </del>
            </div>
            <h3 class="mb-2 text-sm text-gray-400">{product.name}</h3>
          </div>
          <Link to="/product" state={product}>
            <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
              <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                Buy Now
              </div>
              <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                +
              </div>
            </button>
          </Link>
        </article>
      ))}
    </>
  );
};

export default Products1;
