import React from "react";
import SectionHeading from "../SectionHeading";
import { HomeIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";

const Contact = () => {
    return (
      <div className="bg-white bg-opacity-20 py-10">
        <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <SectionHeading heading={"Contact Us"} />
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-xl font-bold text-white sm:text-3xl">
                We will love to hear from you.
              </h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  For support related queries write to: support@xyz.com
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+1 (555) 123 4567</p>
                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
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
                <p className="text-lg text-gray-500">
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
                      className="h-4 w-4 mt-2 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
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
