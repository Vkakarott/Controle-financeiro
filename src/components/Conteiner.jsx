import React from "react";
import './Container.css';

function Container({ children }) {
  return <main className="contant">{children}</main>;
}

export default Container;