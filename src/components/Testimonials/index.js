import React from "react";
import SectionHeading from "../SectionHeading";

const Testimonials = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <SectionHeading heading="Testimonials" />
      <div className="text-gray-300 md:w-3/5 text-center mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod
        tempor incididunt ut l abore et dolore magna aliqua. Ut enim ad minim v
        eniam, quis nostrud exercitation uecat Lorem ipsum dolor sit amet,
        consectetur adipis cing elit, sed do eiusmod tempor incididunt ut l
        abore et dolore magna aliqua. Ut enim ad minim v eniam, quis nostrud
        exercitation uecat{" "}
      </div>
      <div className="grid gris-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-10">
        {[1, 2, 3].map((item, index) => (
          <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
            <div className="w-full flex mb-4 items-start">
              <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-100 border border-gray-200">
                {/* <img src="https://i.pravatar.cc/100?img=6" alt="" /> */}
              </div>
              <div className="flex-1 pl-3">
                <h6 className="font-bold text-sm uppercase text-gray-600">
                  Kris Stanton.
                </h6>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem iusto, explicabo, cupiditate quas totam!
                    consectetur adipisicing elit. Voluptatem iusto, explicabo,
                    cupiditate quas totam! consectetur adipisicing elit.
                    Voluptatem iusto, explicabo, cupiditate quas totam!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
