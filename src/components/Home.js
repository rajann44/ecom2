import React from "react";
import Products1 from "./Products/Products1";

const Home = () => {
  return (
    <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          <Products1></Products1>
        </div>
      </div>
    </section>
  );
};

export default Home;
