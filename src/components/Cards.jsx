import React from "react";
import png1 from "../assets/png1.png";
import png2 from "../assets/png2.png";
import png3 from "../assets/png3.png";
import png4 from "../assets/png4.png";
import png5 from "../assets/png5.png";
import png6 from "../assets/png6.png";

const Cards = () => {
  return (
    <div className="w-full py-[5rem] px-4 bg-white cursor-pointer">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full  bg-[#e7f0f7]  rounded overflow-hidden shadow-xl p-5  hover:scale-105 duration-300">
          <img
            className="w-15 m-[1rem] bg-[#e7f0f7]  block"
            src={png1}
            alt="/"
          />
          <h2 className="text-xl font-bold  p-2 ">Web Designing</h2>

          <p className="p-2 text-sm">
            {" "}
            We create impressive interfaces. Usability + user experience are
            created based on a study of preferences and user behavior, using the
            latest web design trends, our experience, and achievements.
          </p>
        </div>

        <div className="w-full shadow-xl bg-[#f6f5f3]  rounded-lg p-5 hover:scale-105 duration-300">
          <img
            className="w-15 m-[1rem] bg-[#f6f5f3]  block"
            src={png2}
            alt="/"
          />
          <h2 className="text-xl font-bold  p-2">Web Application</h2>
          <p className="p-2 text-sm">
            We develop high-quality and effective applications for your
            business. Our expertise and knowledge help us create reliable mobile
            applications for iOS and Android and cross-platform solutions.
          </p>
        </div>

        <div className="w-full shadow-xl bg-[#f6f5f3] rounded-lg hover:scale-105 duration-300">
          <img
            className="w-15 m-[1rem] bg-[#f6f5f3] block"
            src={png3}
            alt="/"
          />
          <h2 className="text-xl font-bold  p-2">Mobile App Development</h2>
          <p className="p-2 text-sm">
            {" "}
            For some of you, our involvement as an eCommerce development and
            consulting partner will mean a powerful business launch with the
            right technology stack. For others – a possibility to give their
            business a fresh start.
          </p>
        </div>

        <div className="w-full shadow-xl bg-[#fcf0e4]  p-5 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-15 m-[1rem] bg-[#fcf0e4] block"
            src={png4}
            alt="/"
          />
          <h2 className="text-xl font-bold  p-2">Ecommerce Development</h2>
          <p className="p-2 text-sm">
            {" "}
            We bring together expertise in brand marketing and sustainability to
            design and implement ideas in branding. We also bring brand purpose
            to life by communicating great stories. Now Maximize your online
            visibility.
          </p>
        </div>

        <div className="w-full shadow-xl  bg-[#f5f6f8] p-5 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-15 m-[1rem] bg-[#f5f6f8] block"
            src={png5}
            alt="/"
          />
          <h2 className="text-xl font-bold  p-2">Graphic Designing</h2>
          <p className="p-2 text-sm">
            {" "}
            For some of you, our involvement as an eCommerce development and
            consulting partner will mean a powerful business launch with the
            right technology stack. For others – a possibility to give their
            business a fresh start.
          </p>
        </div>

        <div className="w-full  bg-[#effbfb] shadow-xl p-5 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-15 m-[1rem] bg-[#effbfb] block"
            src={png6}
            alt="/"
          />
          <h2 className="text-xl font-bold  p-2">Ecommerce Development</h2>
          <p className="p-2 text-sm">
            {" "}
            For some of you, our involvement as an eCommerce development and
            consulting partner will mean a powerful business launch with the
            right technology stack. For others – a possibility to give their
            business a fresh start.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
