import React from 'react'
import SectionHeading from '../SectionHeading'

const Features = () => {
    return (
      <div className="bg-white bg-opacity-20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white ">
          <SectionHeading heading={"Features"} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <img src={"images/Features.svg"} />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-3xl font-bold uppercase mt-4">
                Insert your bold headline here.
              </div>
              <div className="text-sm mt-4 tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                eiusmod tempor incididunt ut l abore et dolore magna aliqua. Ut
                enim ad minim v eniam, quis nostrud exercitation uecat Lorem
                ipsum dolor sit amet, consectetur adipis cing elit, sed do
                eiusmod tempor incididunt ut l abore et dolore magna aliqua. Ut
                enim ad minim v eniam, quis nostrud exercitation uecat Lorem
                ipsum dolor sit amet, consectetur adipis cing elit, sed do
                eiusmod tempor incididunt ut l abore et dolore magna aliqua. Ut
                enim ad minim v eniam, quis nostrud exercitation uecat{" "}
              </div>
              <div className="text-lg font-light mt-4">
                Try out the amazing options!
                        </div>
                        <button className='rounded-lg border border-white bg-white hover:bg-transparent text-black hover:text-white shadoow-2xl px-20 py-2 mt-4 w-max'>Try Out</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Features