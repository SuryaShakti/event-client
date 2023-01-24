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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20 overflow-x-hidden">
      <SectionHeading heading="Categories" />
      {loading ? <Spinner /> : <Carousel data={data} />}
    </div>
  );
};

export default Categories;
