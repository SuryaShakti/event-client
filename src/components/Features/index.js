import React from "react";
import SectionHeading from "../SectionHeading";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Competitive rates",
    description:
      "Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.",
  },
  {
    name: "Variety of options",
    description:
      "Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.",
  },
  {
    name: "Book at your conformt",
    description:
      "Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.",
  },
  {
    name: "Large team of vendors",
    description:
      "Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.",
  },
];

const Features = () => {
  return (
    <div className="relative bg-white bg-opacity-20 py-10">
      <div class="absolute inset-x-0 top-[-64px] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[-64px]">
        <svg
          class="relative left-[calc(50%-11rem)] -z-0 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fill-opacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white ">
        <SectionHeading heading={"Features"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="z-40 flex justify-center md:justify-start items-center">
            <img className="w-10/12" src={"images/Features.svg"} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-3xl font-bold uppercase mt-4">
              Insert your bold headline here.
            </div>
            <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
              {features.map((feature) => (
                <div key={feature.name}>
                  <dt>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-300">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
            <div className=" text-lg leading-6 font-medium text-gray-300 mt-5">
              Try out the amazing options!
            </div>
            <button className="z-40 rounded-lg border border-white bg-white hover:bg-transparent text-black hover:text-white shadoow-2xl px-20 py-2 mt-4 w-max">
              Try Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
