import React from "react";
import SectionHeading from "../SectionHeading";
import { HomeIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";

const Contact = () => {
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
        <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <SectionHeading heading={"Contact Us"} />
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-3xl">
                We will love to hear from you.
              </h2>
              <div className="mt-3">
                <p className="text-lg text-gray-300">
                  For support related queries write to: support@xyz.com
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon
                      className="h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-300">
                    <p>+1 (555) 123 4567</p>
                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon
                      className="h-6 w-6 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-300">
                    <p>support@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-0">
              <h2 className="text-xl font-bold text-white sm:text-3xl">
                Office Address
              </h2>
              <div className="mt-3">
                <p className="text-lg text-gray-300">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, repellat error corporis doloribus similique,
                  voluptatibus numquam quam, quae officiis facilis.
                </p>
              </div>
              <div className="w-full h-56 my-3 bg-gray-400"></div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <HomeIcon
                      className="h-4 w-4 mt-2 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-300">
                    <p>plot 454, unit-8, Bhubaneswar</p>
                    <p>751002, Odisha, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;
