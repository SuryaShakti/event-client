import React from "react";

const CreatedEventCard = ({ item }) => {
  return (
    <div>
      {" "}
      <div className="rounded-2xl bg-white bg-opacity-25 mx-auto my-2 md:my-2 w-full max-w-[256px]">
        <div className="p-3">
          <div className="bg-[#FFFFFF] bg-opacity-20 p-3 flex justify-center items-center rounded-2xl">
            <img className="h-32 w-full" src={item.attachments[0]} />
          </div>
          <div className="text-base font-bold text-white text-center my-3">
            {item.name}
          </div>
          {/* <div className="text-base font-bold text-white text-center mb-3">
            {item.upDOwnPerrcentage}
          </div> */}
          <div className="w-full h-px bg-white"></div>
          <div className="text-white text-xs text-center mt-2">
            Event Name booking has gone up since last month
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatedEventCard;
