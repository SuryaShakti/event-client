import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const messages = () => {
  const router = useRouter();
  const [status, setStatus] = useState(0);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  const getChats = async () => {
    const token = localStorage.getItem("token");

    var config = {
      method: "get",
      url: "https://api.test.festabash.com/v1/chat/conversation?$populate=users&$populate=lastMessage",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        $populate: {
          path: "lastMessage",
          populate: ["createdBy"],
        },
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

  useEffect(() => {
    getChats();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-white">
      <div className="md:max-w-4xl">
        <div className="w-full rounded-xl bg-white shadow grid grid-cols-2 h-10">
          <div
            onClick={() => setStatus(0)}
            className={
              status === 0
                ? "bg-indigo-700 rounded-xl w-full cursor-pointer text-white flex justify-center items-center font-medium text-lg"
                : "bg-white rounded-xl w-full cursor-pointer text-gray-700 flex justify-center items-center font-medium text-lg"
            }
          >
            Co-hosts
          </div>
          <div
            onClick={() => setStatus(1)}
            className={
              status === 1 || status === 2
                ? "bg-indigo-700 rounded-xl w-full cursor-pointer text-white flex justify-center items-center font-medium text-lg"
                : "bg-white rounded-xl w-full cursor-pointer text-gray-700 flex justify-center items-center font-medium text-lg"
            }
          >
            Vendors
          </div>
        </div>
        {status === 0
          ? data?.map((chat, index) => (
              <div
                key={index}
                onClick={() => router.push(`messages/${chat._id}`)}
                className="w-full flex my-3 items-center bg-white bg-opacity-30 rounded-xl p-2 "
              >
                <div className="flex items-center flex-1">
                  <img src={chat.avatar} className="w-20 h-20 rounded-full" />
                  <div className="ml-3 space-y-1">
                    <div className="text-lg font-bold">{chat.name}</div>
                    <div className="text-xs">
                      {chat?.lastMessage?.createdBy?.name
                        ? chat?.lastMessage?.createdBy?.name
                        : "No messages yet"}
                    </div>
                  </div>
                </div>
                <div>
                  {chat.lastMessage?.createdBy?.createdAt
                    ? chat.lastMessage?.createdBy?.createdAt.slice(11, 16)
                    : ""}
                </div>
              </div>
            ))
          : "No vendors yet"}
      </div>
    </div>
  );
};

export default messages;
