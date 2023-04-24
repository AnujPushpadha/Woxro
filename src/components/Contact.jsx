import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="h-[300px] bg-black  flex flex-col justify-center">
      <div className="flex justify-around  flex-col md:flex-row">
        <div className="w-[500px] ml-10">
          <p className="text-white font-bold text-4xl">
            We offer all kinds of IT services that ensure your success
          </p>
        </div>
        <div className="ml-10 mt-5">
          <button className="bg-black text-white hover:bg-white hover:text-black  font-bold py-4 px-8   border border-white rounded">
            <FontAwesomeIcon icon={faComment} className="mr-2" />
            Let's Talk
          </button>
          <button className="bg-black text-white hover:bg-white hover:text-black  font-bold py-4 px-8 border border-white rounded ml-2">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
