import React from 'react'

const CraetedEventHero = () => {
  return (
    <div className="h-screen flex-1 flex items-center bg-opacity-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-span-1 flex justify-center flex-col space-y-5">
          <div className="text-5xl font-bold text-white">Create your</div>
          <div className="text-9xl font-bold text-white">Event</div>
          <div className="text-5xl font-bold text-white">with us</div>
        </div>
        <div className="col-span-1">
          <img src="images/hero.svg" />
        </div>
      </div>
    </div>
  );
}

export default CraetedEventHero