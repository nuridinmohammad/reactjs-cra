import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={nav}>
      <h1>Mohammad Nuridin</h1>
      <ul style={link}>
        <li>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ color: "#fff", textDecoration: "none" }} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

const link = {
  display: "flex",
  listStyle: "none",
  justifyContent: "space-between",
  width: "20%",
  gap: "2rem",
};

const nav = {
  display: "flex",
  background: "#fe024e",
  padding: "0 6rem",
  height: "3.5rem",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  width: "100%",
};
