import { useRouter } from "next/router";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="bg-[#0A061D]  relative h-screen max-w-[100vw] overflow-x-hidden">
      <div className="fixed -top-10 -left-10 h-96 w-96 bg-orange-200 opacity-20 rounded-full -z-10  blur-3xl"></div>
      <div className="fixed bottom-0 right-0 h-96 w-96 bg-sky-200 opacity-20 rounded-full -z-10  blur-3xl"></div>

      {router.pathname !== "/login" && <Header />}
      <div className="z-40">{children}</div>
      {router.pathname !== "/login" && <Footer />}
    </div>
  );
};

export default Layout;
