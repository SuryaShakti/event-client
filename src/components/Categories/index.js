import React, { useEffect, useState } from "react";
import SectionHeading from "../SectionHeading";
import basicFetch from "../../apis/index";
import Carousel from "../Carousel";
import axios from "axios";
import Spinner from "../Spinner";

const Categories = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    var config = {
      method: "get",
      url: "https://api.test.festabash.com/v1/category",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzM0NDgzNDUsImV4cCI6MTY3NjA0MDM0NSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNjMzZDdiNDNhNzllZDM3MTA2ZDdmMjgzIiwianRpIjoiYWFkOWFhM2EtOTkwMi00ZGExLWJiZmYtNTJiZjVkZjJhOWU3In0.QZxRQYeknJWXZoJZd3NEOMIs4ZchQl_Arkhfbdlg9Fs",
      },
    };

    await axios(config)
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative w-screen">
      <div class="absolute inset-x-0 top-[-64px] -z-0 transform-gpu overflow-hidden blur-3xl sm:top-[-64px]">
        <svg
          class="relative left-[calc(50%-11rem)] -z-0 h-[21.1875rem] max-w-none   rotate-[30deg] sm:right-[calc(0%-1rem)] sm:h-[42.375rem]"
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
      <div className="z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 overflow-x-hidden">
        <SectionHeading heading="Categories" />
        {loading ? <Spinner /> : <Carousel data={data} />}
      </div>
    </div>
  );
};

export default Categories;
