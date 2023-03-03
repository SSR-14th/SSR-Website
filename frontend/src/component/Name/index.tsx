import React from "react";
import "./Name.css";

export const Name = (props: any) => {
    const { children } = props;
    return (
        <div className="name">
            {children}
        </div>
    );
};