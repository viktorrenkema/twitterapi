import * as React from "react";
import { motion } from "framer-motion";

export default function Form(props) {
  // Trigger refresh of render when form is updated ↓
  const [form, setForm] = React.useState(false);
  // Number of dots shown ↓
  const [quantity, setQuantity] = React.useState(undefined);

  // Set radius ↓
  const [radius, setRadius] = React.useState(undefined);

  // Set margin ↓
  const [margin, setMargin] = React.useState(undefined);
  // Set duration ↓
  const [duration, setDuration] = React.useState(undefined);
  // Set delay ↓
  const [delay, setDelay] = React.useState(undefined);

  // Add # of dots to array to render ↓
  let renderdots = [];
  for (let i = 0; i < quantity; i = i + 1) {
    renderdots.push(
      <Dot
        key={i}
        customdelay={delay ? i / 10 + delay : 0}
        radius={radius}
        margin={margin}
        duration={duration}
      ></Dot>
    );
  }

  return (
    <motion.div
      className="wrap-dots"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <form onsubmit={() => setQuantity(true)} autocomplete="off">
        <h2>Choose your styling</h2>
        <label
          style={{ color: "white", display: "inline-block" }}
          for="quantity"
        >
          Quantity
        </label>
        <input
          style={{ display: "inline-block" }}
          type="number"
          id="quantity"
          name="quantity"
          min="0"
          max="10"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label style={{ color: "white" }} for="quantity">
          Radius
        </label>
        <input
          type="number"
          id="radius"
          name="radius"
          min="0"
          max="100"
          onChange={(e) => setRadius(e.target.value)}
        />
        <label style={{ color: "white" }} for="quantity">
          Padding
        </label>
        <input
          type="number"
          id="padding"
          name="padding"
          min="0"
          max="40"
          onChange={(e) => setMargin(e.target.value)}
        />
        <h2>Choose your animation</h2>
        <label style={{ color: "white" }} for="quantity">
          Duration
        </label>
        <input
          type="number"
          id="duration"
          name="duration"
          min="0"
          max="10"
          onChange={(e) => setDuration(parseInt(e.target.value))}
        />
        <label style={{ color: "white" }} for="quantity">
          Delay
        </label>
        <input
          type="number"
          id="delay"
          name="delay"
          min="0"
          max="1"
          onChange={(e) => setDelay(e.target.value)}
        />
      </form>

      {/* Render loader dots ↓ */}
      {<div style={{ marginTop: "4rem" }}>{renderdots}</div>}
    </motion.div>
  );
}

export function Dot(props) {
  const transition = {
    yoyo: Infinity,
    ease: "linear",
    duration: props.duration ? `${props.duration}` : 1,
    delay: props.customdelay,
  };
  console.log(transition);

  const dot = {
    width: "10px",
    height: "10px",
    margin: props.margin ? `${props.margin}px` : "5px",
    borderRadius: props.radius ? `${props.radius}px` : "0px",
    display: "inline-block",
  };

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
  console.log(duration);
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
