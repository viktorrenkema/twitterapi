import React from "react";
import { motion } from "framer-motion";
import data from "../components/apiexp";

export default function GraphOne(props) {
  //   function findValue() {
  //     const hits = data.forEach(d => console.log("hit"))
  //   }
  let mydata = data;
  console.log(mydata);
  //   mydata.forEach(doSomething => console.log("I want to eat a " + doSomething))

  return (
    <motion.div>
      <motion.div
        style={{
          width: "200px",
          height: "200px",
          background: "#BF354F",
          borderRadius: 100,
        }}
      ></motion.div>
    </motion.div>
  );
}
