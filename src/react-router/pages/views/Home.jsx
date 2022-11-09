import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { skills } from "../../utils/skill";

export default function Home() {
  const [skill, setSkill] = useState(skills);

  useEffect(() => {
    setSkill(skill);
  }, [skill]);

  return (
    <div style={home}>
      <h1>Home</h1>
      <div style={container}>
        {skill.map((item, index) => (
          <div key={index}>
            <Link to={`/detail/${item.id}`}>
              <div style={containerImage}>
                <img style={img} src={item.image} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const container = {
  display: "flex",
  flexWrap: "wrap",
  cursor: "pointer",
  marginTop: "1.5rem",
  justifyContent: "space-between",
};
const containerImage = {
  width: "100%",
  height: "10rem",
};

const img = {
  width: "100%",
  height: "100%",
};
const home = {
  padding: "10px 6rem",
};
