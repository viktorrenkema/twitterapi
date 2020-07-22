import Head from "next/head";
import FetchData from "../components/api";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

const product = {
  height: "450px",
  width: "450px",
  background: "white",
  border: "2px solid white",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginRight: "2rem",
};
const img = {
  width: "70%",
  height: "70%",
  objectFit: "contain",
  alignSelf: "center",
  pointerEvents: "none",
};

const infoWrap = {
  display: "flex",
  width: "50%",
  paddingTop: "1rem",
  justifyContent: "space-between",
};

function ProductCard(props) {
  return (
    <div style={product}>
      <img src={props.imgpath} alt="Vitamix" style={img} />
      <div style={infoWrap}>
        <p>{props.productinfo}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const x = useSpring(0);
  const width = useTransform(x, [-1000, 0], [350, 0]);
  return (
    <div className="container">
      <Head>
        <title>Twitter Moods</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <motion.h1
          className="title"
          style={{ alignSelf: "center", display: "inline-block" }}
        >
          Today’s offers
        </motion.h1>
        <motion.div
          drag={"x"}
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.05}
          style={{ x, whiteSpace: "nowrap", overflow: "visible" }}
        >
          <ProductCard
            imgpath="/img-vitamix.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-airpods.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-marshall.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-vitamix.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-airpods.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-marshall.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-vitamix.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-airpods.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
          <ProductCard
            imgpath="/img-marshall.jpeg"
            productinfo="Vitamix blender"
            price={"€399"}
          ></ProductCard>
        </motion.div>
      </main>
      <motion.div className="drag-progress-bg">
        <motion.div style={{ width }} className="drag-progress"></motion.div>
      </motion.div>

      <style jsx>{`
        main {
          padding-top: 10rem;
          background: #fafafa;
        }
        footer {
          width: 100%;
          height: 40px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .carousel-container {
          white-space: nowrap;
          overflow: scroll;
        }
        .img-container {
          height: 450px;
          width: 450px;
          display: inline-block;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          pointer-events: none;
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
        p {
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

// Home.getInitialProps = async function () {
//   const res = await fetch(
//     "https://my-json-server.typicode.com/wrongakram/demo/products"
//   );
//   const data = await res.json();
//   return {
//     products: data,
//   };
// };
