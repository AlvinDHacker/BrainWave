import { ChevronRight } from "lucide-react";
import React from "react";

const Courses = () => {
  const data = [
    {
      cname: "HTML & CSS",
      cdesc:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      clink: "#",
    },
    {
      cname: "HTML & CSS",
      cdesc:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      clink: "#",
    },
    {
      cname: "HTML & CSS",
      cdesc:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      clink: "#",
    },
  ];
  return (
    <div>
      <div className="w-[85%] mx-auto py-5">
        <h1 className="my-5 text-3xl font-bold text-center dark:text-gray-400">
          Learn the best courses worldwide
        </h1>
        <div className="grid md:grid-cols-3 gap-3">
          {data.map((values, index) => (
            <div className="max-w-sm my-2 mb-5 bg-white border hover:shadow-2xl border-gray-200 rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-800">
              <div className="p-5" key={index}>
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {values.cname}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {values.cdesc}
                </p>
                <a
                  href={values.clink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <ChevronRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
