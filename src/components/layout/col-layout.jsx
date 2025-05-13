import * as React from "react";

export const LeftCont = ({ children }) => {
  return <div className="flex-[calc(50%-20px)] items-start">{children}</div>;
};

export const RightCont = ({ children }) => {
  return <div className="flex-[calc(50%-20px)]">{children}</div>;
};
export const WideCont = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};

function Col({ children, className }) {
  return <div className={`flex justify-between ${className}`}>{children}</div>;
}
export default Col;
