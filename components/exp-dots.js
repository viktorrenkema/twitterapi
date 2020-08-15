import * as React from "react";
import { motion } from "framer-motion";
import users from "../data/twitterjson.json";

const variants = {
  show: {
    scale: 1,
    background: "#fecf44",
  },
  hide: {
    scale: 0,
    background: "#fca967",
  },
};

const dot = {
  width: "6px",
  height: "6px",
  marginRight: "5px",
  display: "inline-block",
};

export default function ExpDots(props) {
  let hits = 0;

  const [data, setData] = React.useState({ users: [] });
  const [dataReceived, setDataReceived] = React.useState(false);

  // Option B: utilize a JSON file as our data input

  React.useEffect(() => {
    setData(users);
    setDataReceived(true);
    hits = 0;
  }, []);
  console.log(users);

  data.users.map((name) => {
    // Condition
    if (name.name.includes("d")) {
      hits++;
    }
  });
  console.log(hits);

  let renderdots = [];
  for (let i = 0; i < hits; i = i + 1) {
    renderdots.push(<Dot key={i} delay={0.1 + i / 10}></Dot>);
  }

  return (
    <motion.div className="wrap-dots" style={{ display: "flex" }}>
      {renderdots}
      <p>{hits}</p>
    </motion.div>
  );
}

export function Dot(props) {
  const transition = {
    yoyo: Infinity,
    ease: "linear",
    duration: 1,
    delay: props.delay,
  };

  return (
    <motion.div
      variants={variants}
      animate={"show"}
      initial={"hide"}
      transition={transition}
      style={dot}
    ></motion.div>
  );
}
