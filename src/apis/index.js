import axios from "axios";

const basicFetch = async (url) => {
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
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default basicFetch;
