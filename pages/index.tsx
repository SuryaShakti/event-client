import type { NextPage } from "next";
import Head from "next/head";
import Header from "../src/components/Layout/Header";
import Hero from "../src/components/Hero";
import Categories from "../src/components/Categories";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Event Management Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="absolute top-0 left-0 h-96 w-96 bg-orange-200 opacity-20 rounded-full animate-ballone blur-3xl"></div>
      <div className="absolute top-0 right-0 h-96 w-96 bg-sky-200 opacity-20 rounded-full animate-balltwo blur-3xl"></div> */}
      <div className="z-50">
        <div className="h-screen flex flex-col">
          {/* <Header /> */}
          <Hero />
        </div>
        <Categories />
      </div>
    </div>
  );
};

export default Home;
