import { useState } from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something Went Wrong!! </h2>
      <h4>
        {err.status}: {err.statusText}
      </h4>
    </div>
  );
};

export default Error;
