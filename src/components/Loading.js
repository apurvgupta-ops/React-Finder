import React from "react";
import { Triangle } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Triangle height="100" width="100" color="blue" />
    </div>
  );
};
