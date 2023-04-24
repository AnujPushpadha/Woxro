import React from "react";
import Cards from "./Cards";

const Services = () => {
  return (
    <div className="p-12 bg-white">
      <div className="bg-white">
        <center>
          <strong className=" font-poppins tracking-wider uppercase">
            services we deliver
          </strong>
        </center>
      </div>
      <div>
        <center>
          <h1 className="mt-3 text-3xl text-2xl tracking-wider max-w-screen-md">
            <strong>
              {" "}
              Preparing for your success, we provide truly prominent IT
              solutions.
            </strong>
          </h1>
        </center>
      </div>
      <Cards />
    </div>
  );
};

export default Services;
