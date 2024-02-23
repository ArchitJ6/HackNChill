import React from "react";

const Merchandise = ({ head, id }) => {
  return (
    <div>
      <div id={id}>
        <div className="max-w-screen-2xl mx-auto px-[5vw] py-[50px]">
          <div className="flex text-3xl sm:text-5xl mx-[-5vw] justify-center ">
            <div className="bg-gradient-to-r from-gray-500 to-white text-transparent bg-clip-text font-semibold text-5xl font-ubuntu">
              {head
                .split(" ")
                .slice(0, head.split(" ").length - 1)
                .join(" ")}
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-900 ml-2 sm:ml-4 px-1 text-white font-semibold text-5xl font-ubuntu">
              {head.split(" ")[head.split(" ").length - 1]}
            </div>
          </div>

          <div id={id}>
            {" "}
            <div className="pt-20 mb-16 flex justify-center items-center">
                <div className="h-44 w-80 lg:w-80 lg:h-44  cursor-pointer bg-line">
                    <img
                        src="assets/Sponsors/BobbleAi_Logo.png"
                        alt="BobbleAI LOGO"
                        className="object-contain h-full bg-white w-full  translate-x-2 -translate-y-2"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
