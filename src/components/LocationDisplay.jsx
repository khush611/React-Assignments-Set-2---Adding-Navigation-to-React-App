import React from "react";

export default function LocationDisplay(props) {
  // const path = this.props.path;
  // console.log(this.props.path);
  return (
    <>
      <div>Render aanything </div>
      {props.paths === "home" && <div>{"/"}</div>}
      {props.paths === "about" && <div>{"/about"}</div>}
    </>
  );
}
