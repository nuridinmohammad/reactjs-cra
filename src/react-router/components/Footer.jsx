import React from "react";

export default function Footer() {
  return (
    <div style={footer}>
      <h1>Footer</h1>
    </div>
  );
}

const footer = {
  display: "flex",
  background: "#fe024e",
  height: "3.5rem",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  position: "absolute",
  bottom: "0",
  width: "100%",
};
