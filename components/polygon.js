import * as React from "react";
import { motion } from "framer-motion";

// Outer/lighter wave

const mytransition = {
  // yoyo: Infinity,
  ease: "linear",
  duration: 4,
};
const path = {
  first: {
    d: "M 187 173 L 187 173 L 187 173 L 187 173 L 187 173 L 187 173 Z",
  },
  second: {
    d:
      "M 187 81.5 L 325.5 111 L 299.5 264 L 187 256 L 101.5 226 L 66.555 117.25 Z",
  },
};

const polygonstyle = {
  opacity: 1,
  fill: "#fecc431a",
  stroke: "#FECC43",
  strokeWidth: "1",
};

export default function Polygon(props) {
  return (
    <motion.div>
      {/* <div className="hexagon"></div> */}
      <motion.svg xmlns="http://www.w3.org/2000/svg" width="374" height="374">
        <motion.path
          variants={path}
          initial={"first"}
          animate={"second"}
          transition={mytransition}
          style={polygonstyle}
        />
      </motion.svg>
    </motion.div>
  );
}
