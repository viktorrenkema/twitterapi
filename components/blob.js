import * as React from "react";
import { motion } from "framer-motion";

// Outer/lighter wave

const mytransition = {
  yoyo: Infinity,
  ease: "linear",
  duration: 5,
};
const wave = {
  first: {
    d:
      "M47.8,-40.8C58.7,-24.5,62,-4.8,59.7,16.9C57.3,38.6,49.4,62.3,32.1,73.1C14.8,83.9,-11.7,81.7,-30.1,70C-48.5,58.3,-58.7,37,-60.7,17.1C-62.6,-2.8,-56.3,-21.3,-44.8,-37.8C-33.3,-54.3,-16.6,-68.7,0.9,-69.4C18.5,-70.1,36.9,-57.2,47.8,-40.8Z",
    opacity: 1,
  },
  second: {
    d:
      "M37.5,-27.6C48.8,-15.8,58.2,-0.2,55.5,13.1C52.8,26.3,38,37.2,22.1,44.3C6.2,51.3,-10.7,54.4,-23.3,48.4C-35.8,42.3,-43.8,27.1,-48.3,10.2C-52.7,-6.6,-53.6,-25,-45,-36.2C-36.4,-47.4,-18.2,-51.3,-2.5,-49.3C13.1,-47.3,26.2,-39.3,37.5,-27.6Z",
    opacity: 1,
  },
};

export default function Blob(props) {
  return (
    <motion.div className="Outter-Wave1">
      <motion.div className="Inner-Wave1">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          class="shadow"
          viewBox="0 0 200 200"
        >
          <motion.path
            variants={wave}
            initial={"first"}
            animate={"second"}
            transition={mytransition}
            transform="translate(100 100)"
            fill="#F55A9A"
          />
          <foreignObject x="20" y="20" width="160" height="160">
            <p>{props.hits}</p>
          </foreignObject>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}

{
  /* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M47.8,-40.8C58.7,-24.5,62,-4.8,59.7,16.9C57.3,38.6,49.4,62.3,32.1,73.1C14.8,83.9,-11.7,81.7,-30.1,70C-48.5,58.3,-58.7,37,-60.7,17.1C-62.6,-2.8,-56.3,-21.3,-44.8,-37.8C-33.3,-54.3,-16.6,-68.7,0.9,-69.4C18.5,-70.1,36.9,-57.2,47.8,-40.8Z" transform="translate(100 100)" />
</svg>

<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M37.5,-27.6C48.8,-15.8,58.2,-0.2,55.5,13.1C52.8,26.3,38,37.2,22.1,44.3C6.2,51.3,-10.7,54.4,-23.3,48.4C-35.8,42.3,-43.8,27.1,-48.3,10.2C-52.7,-6.6,-53.6,-25,-45,-36.2C-36.4,-47.4,-18.2,-51.3,-2.5,-49.3C13.1,-47.3,26.2,-39.3,37.5,-27.6Z" transform="translate(100 100)" />
</svg> */
}
