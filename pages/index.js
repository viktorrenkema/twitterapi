import Head from "next/head";
import TwitterData1 from "../components/dataset1";
import TwitterData2 from "../components/dataset2";
import TwitterData3 from "../components/dataset3";
import Blob from "../components/blob";
import Polygon from "../components/polygon";
import Dots, { Dot } from "../components/dots";
import ExpDots from "../components/exp-dots";
import Form from "../components/form";
import { GraphOne } from "../components/dataset1";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Home(props) {
  const [tab, setCurrentTab] = React.useState(1);

  console.log(tab);
  return (
    <div className="container">
      <Head>
        <title>Data Visualization</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Data Visualization<Dot></Dot>
        </h1>

        <ul>
          <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <motion.li onClick={() => setCurrentTab(1)}>
              Dots
              {tab === 1 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #fecf44 0%, #FCA967 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li onClick={() => setCurrentTab(2)}>
              Graph{" "}
              {tab === 2 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(270deg, #F87F84 0%, #FCA967 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li onClick={() => setCurrentTab(3)}>
              Plot{" "}
              {tab === 3 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #F78282 0%, #F45B99 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li onClick={() => setCurrentTab(4)}>
              Blob{" "}
              {tab === 4 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #F78282 0%, #F45B99 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
          </AnimateSharedLayout>
        </ul>
        {/*                                               */}
        {/* display components if certain state is active */}
        {/*                                               */}
        <div style={{ display: "flex", height: "800px" }}>
          {tab == 1 && (
            <div>
              {/* <Dots></Dots>
              <ExpDots></ExpDots>
              <br></br>
              <br></br>
              <br></br>
              <br></br> */}
              <Form></Form>
            </div>
          )}
          {tab == 2 && <Polygon></Polygon>}
          {tab == 3 && (
            <TwitterData3
              color={"linear-gradient(180deg, #BF354F, #D75A75)"}
            ></TwitterData3>
          )}
          {tab == 4 && <Blob></Blob>}
        </div>
      </main>
    </div>
  );
}
