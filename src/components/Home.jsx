import React from "react";
import LocationDisplay from "./LocationDisplay";

export default function Home() {
  // const path = this.props.path;
  return (
    <>
      <div>You are home.</div>
      <LocationDisplay paths={"home"} />
    </>
  );
}
