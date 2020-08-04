import Head from "next/head";
import TwitterData1 from "../components/dataset1";
import TwitterData2 from "../components/dataset2";
import TwitterData3 from "../components/dataset3";
import { GraphOne } from "../components/dataset1";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Home(props) {
  const [tab, setCurrentTab] = React.useState(1);

  console.log(tab);
  return (
    <div className="container">
      <Head>
        <title>Twitter API Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Twitter API Stuff</h1>
        <ul>
          <AnimateSharedLayout transition={{ duration: 0.5 }}>
            <motion.li
              onClick={() => setCurrentTab(1)}
              // animate={{
              //   backgroundColor: tab == 1 ? "#1d2537f2" : "#e0e0e014",
              // }}
            >
              Dataset 1
              {tab === 1 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(180deg, #D65976 0%, #D7595D 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li
              onClick={() => setCurrentTab(2)}
              // animate={{
              //   backgroundColor: tab == 2 ? "#1d2537f2" : "#e0e0e014",
              // }}
            >
              Dataset 2{" "}
              {tab === 2 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(180deg, #D65976 0%, #D7595D 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
            <motion.li
              onClick={() => setCurrentTab(3)}
              // animate={{
              //   backgroundColor: tab == 3 ? "#1d2537f2" : "#e0e0e014",
              // }}
            >
              Dataset 3{" "}
              {tab === 3 && (
                <motion.div
                  layoutId="underline"
                  style={{
                    height: "2px",
                    width: "100%",
                    background:
                      "linear-gradient(180deg, #D65976 0%, #D7595D 100%)",
                  }}
                ></motion.div>
              )}
            </motion.li>
          </AnimateSharedLayout>
        </ul>
        <div style={{ display: "flex", height: "800px" }}>
          {tab == 1 && (
            <TwitterData1
              color={"linear-gradient(180deg, #D65967, #ad485e)"}
            ></TwitterData1>
          )}
          {tab == 2 && (
            <TwitterData2
              color={"linear-gradient(180deg, #D65976, #D7595D)"}
            ></TwitterData2>
          )}
          {tab == 3 && (
            <TwitterData3
              color={"linear-gradient(180deg, #BF354F, #D75A75)"}
              // color={"linear-gradient(180deg, #BF354F, #D75A75)"}
            ></TwitterData3>
          )}
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
