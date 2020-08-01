import * as React from "react";
import axios from "axios";
import { motion } from "framer-motion";

// Learn more: https://framer.com/api

let mydata;

export default function TwitterData(props) {
  const [data, setData] = React.useState({ users: [] });
  const [dataReceived, setDataReceived] = React.useState(false);

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        proxyurl +
          "https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=vrenkema&skip_status=true&include_user_entities=false",
        {
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAL%2FAFgEAAAAAxXXFVp%2BRE46PUs%2F9SY78NLF%2FJxg%3DLOblozz798DfaRJ9dUuYf1NPvnTDCv9twVshNPDy3KHoch44vu",
          },
        }
      );

      setData(result.data);
      setDataReceived(true);
      mydata = result;
    };

    fetchData();
  }, []);

  return (
    <div>
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

TwitterData.defaultProps = {
  height: 400,
  width: 200,
};

// Primitive visualization of our data

let dhits = 0;

function GraphOne(props) {
  // Create a new array of all individuals whose name contains a "d"
  function findHits() {
    props.data.map((name) => {
      if (name.name.includes("d")) {
        dhits++;
      } else {
        dhits = dhits + 0;
      }
    });
  }

  if (props.dataReceived) {
    findHits();
  }

  console.log("Result is " + dhits);

  return (
    <motion.div>
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
            width: "50px",
            height: "50px",
            background: "#d75a6b",
            borderRadius: 100,
            color: "white",
            fontSize: "24px",
            display: "grid",
            placeItems: "center",
          }}
        >
          {dhits}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
