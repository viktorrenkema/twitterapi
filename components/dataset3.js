import * as React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import users from "../data/twitterjson.json";

// Learn more: https://framer.com/api

let mydata;

let mygradient;

export default function TwitterData(props) {
  const [data, setData] = React.useState({ users: [] });
  const [dataReceived, setDataReceived] = React.useState(false);

  mygradient = props.color;
  console.log(mygradient);

  // Option A: relying on the actual API (with 15 requests/15mins limit)

  // const proxyurl = "https://cors-anywhere.herokuapp.com/";

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       proxyurl +
  //         "https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=vrenkema&skip_status=true&include_user_entities=false",
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer AAAAAAAAAAAAAAAAAAAAAL%2FAFgEAAAAAxXXFVp%2BRE46PUs%2F9SY78NLF%2FJxg%3DLOblozz798DfaRJ9dUuYf1NPvnTDCv9twVshNPDy3KHoch44vu",
  //         },
  //       }
  //     );

  //     setData(result.data);
  //     setDataReceived(true);
  //     mydata = result;
  //   };

  //   fetchData();
  // }, []);

  // Option B: utilize a JSON file as our data input

  React.useEffect(() => {
    setData(users);
    setDataReceived(true);
    console.log(users);
    hits = 0;
  }, []);

  return (
    <div className="Outter-DataVisualizer">
      <GraphOne
        data={data.users}
        dataReceived={dataReceived}
        setDataReceived={setDataReceived}
      ></GraphOne>
      <ul>
        {data.users.map((item) => (
          <p key={item.name}>{item.name}</p>
        ))}
      </ul>
    </div>
  );
}

// Primitive visualization of our data

let hits = 0;

function GraphOne(props) {
  // Create a new array of all individuals whose name contains a "d"
  function findHits() {
    props.data.map((name) => {
      if (name.name.includes("e")) {
        hits++;
      }
    });
  }

  if (props.dataReceived) {
    // React.useEffect(() => {
    findHits();
    console.log("Result is " + hits);
    // }, []);
  }
  return (
    <motion.div>
      <h1>Dataset Three</h1>
      <motion.div
        style={{
          border: "3px solid #D6596B",
          width: "200px",
          height: "200px",
          background: "none",
          display: "grid",
          placeItems: "center",
          borderRadius: 100,
        }}
      >
        <motion.div
          style={{
            // width: "50px",
            // height: "50px",
            background: mygradient,
            borderRadius: "1000px",
            color: "white",
            fontSize: "24px",
            display: "grid",
            placeItems: "center",
          }}
          animate={{
            width: `${hits * 10}px`,
            height: `${hits * 10}px`,
          }}
          transition={{
            duration: 2,
            // type: "spring",
            // damping: 1,
            // mass: 0.1,
          }}
        >
          {hits}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
