import React from "react";

function Banner({ children, className }) {
  return <div className={`banner ${className}`}>{children}</div>;
}

export default Banner;
