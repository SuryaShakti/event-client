import React from "react";

const AppsLink = () => {
  return (
    <div className="text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="text-xl md:text-4xl font-extrabold flex items-center">
          Download From
        </div>
        <div className="flex justify-start space-x-3 mt-3 md:mt-0 md:justify-evenly items-center">
          <img className="w-2/5" src={"images/AppStore.svg"} />
          <img className="w-2/5" src={"images/PlayStore.svg"} />
        </div>
      </div>
      <div className="mt-10 py-5 border-t lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-xl font-medium text-white"
            id="newsletter-headline"
          >
            Newsletter
          </h2>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-300">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-white font-medium underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppsLink;
