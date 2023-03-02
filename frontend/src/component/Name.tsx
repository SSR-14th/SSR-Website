import React from "react";
import "./Name.css";

const Name = (props: any) => {
  const { children } = props;
  return (
    <div className="name">
      {children}
    </div>
  );
};

export default Name;

