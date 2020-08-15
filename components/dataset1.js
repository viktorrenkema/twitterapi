import * as React from "react";
import axios from "axios";
import Blob from "./blob";
import { motion } from "framer-motion";
import users from "../data/twitterjson.json";

let mydata;

let mygradient;
let singlecolor;

export default function TwitterData1(props) {
  const [data, setData] = React.useState({ users: [] });
  const [dataReceived, setDataReceived] = React.useState(false);

  mygradient = props.color;
  let singlecolor = props.color.slice(33, 40);

  console.log(singlecolor);

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
      {/* <ul>
        {data.users.map((item) => (
          <p key={item.name}>{item.name}</p>
        ))}
      </ul> */}
    </div>
  );
}

// Primitive visualization of our data

let hits = 0;

function GraphOne(props) {
  // Create a new array of all individuals whose name contains a "d"
  function findHits() {
    hits = 0;
    props.data.map((name) => {
      if (name.name.includes("a")) {
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
  console.log(singlecolor);
  return (
    <motion.div>
      <Blob hits={hits}></Blob>
      {/* <p
          style={{
            position: "absolute",
            // top: "calc(50% - 200px)",
            top: "50%",
            left: "50%",
          }}
        >
          {hits}
        </p> */}
    </motion.div>
  );
}
