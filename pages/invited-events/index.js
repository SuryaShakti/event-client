import React, { useEffect } from "react";
import CraetedEventHero from "../../src/components/CreatedEventHero";
import { ChevronDownIcon } from "@heroicons/react/outline";
import CardsContainer from "../../src/components/CardsContainer";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import InvitedEventHero from "../../src/components/InvitedEventHero";

// const data = [
//   {
//     name: "Birthday",
//     avatar:
//       "https://festa-event-dev.s3.ap-south-1.amazonaws.com/photos/1670140547827_vecteezyBirthdayBackgroundfv0421_generated.jpg",
//   },
// ];

const index = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    !localStorage.getItem("token") ? router.push("/login") : fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token");
    var config = {
      method: "get",
      url: "https://api.test.festabash.com/v1/event-management/invited-events",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-screen overflow-x-hidden">
      <InvitedEventHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="flex justify-between">
          <div className="w-full text-4xl text-white font-bold mb-16">
            Invited Events
          </div>
          <div className=" space-x-8 flex text-white">
            <div>Filter</div>
            <div className="flex items-start space-x-2">
              <div className="whitespace-nowrap">
                Currently you are in Chennai
              </div>
              <ChevronDownIcon className="text-white w-3 mt-2" />
            </div>
          </div>
        </div>
      </div>
      <CardsContainer data={data} section="invited-events" />
    </div>
  );
};

export default index;
