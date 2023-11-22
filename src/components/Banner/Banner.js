import React from "react";

// This is a primitive component that we can use in any other case
function Banner({ status, children }) {
  return <div className={`banner ${status}`}>{children}</div>;
}

export default Banner;
