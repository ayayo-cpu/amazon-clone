import React from "react";
import { RingLoader } from "react-spinners";
function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <RingLoader />
    </div>
  );
}

export default Loader;
