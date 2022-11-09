import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { skills } from "../../utils/skill";

function Detail() {
  const [skill, setSkill] = useState(skills);
  const [item, setItem] = useState({});
  const params = useParams();

  useEffect(() => {
    setSkill(skill);
    const findById = skill.find((item) => item.id === parseInt(params.id));
    setItem(findById);
  }, [params.id, skill]);

  return (
    <div style={{ padding: "10px 6rem" }}>
      <h1>Detail</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ width: "10rem", height: "100%" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={item.image}
            alt={item.name}
          />
        </div>
        <div>
          <h1>{item.name}</h1>
          <p>{item.desc}</p>
          <Link to="/">Bact Home</Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Detail);
