import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full"></div>
    </div>
  );
};

export default Loader;
