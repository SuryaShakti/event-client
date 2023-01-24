import React from "react";
import CreatedEventCard from "../CreatedEventCard";
import InvitedEventCard from "../InvitedEventCard";

const CardsContainer = ({ data, section }) => {
  console.log(data);
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-3 lg:gap-6">
      {data.map((item, index) => (
        <InvitedEventCard key={index} item={item} section={section} />
      ))}
    </div>
  );
};

export default CardsContainer;
