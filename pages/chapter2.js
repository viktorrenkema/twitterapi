import Head from "next/head";
import FetchData from "../components/api";

export default function Home() {
  console.warn("Chapter 2.1");
  for (
    let hashString = "#";
    hashString.length < 8;
    hashString = hashString + "#"
  ) {
    console.log(hashString);
  }
  console.warn("Chapter 2.2");
  for (let count = 1; count <= 100; count = count + 1) {
    if (count % 3 == 0 && count % 5 == 0) {
      console.log("FizzBuzz");
    } else if (count % 3 == 0) {
      console.log("Fizz");
    } else if (count % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(count);
    }
  }
  console.warn("Chapter 2.3");

  let chessboardString = "";

  function chessField(size) {
    let totalsize = size * size + size;
    for (let count = 0; count < totalsize; count = count + 1) {
      if (chessboardString.length % (size + 1) == 0) {
        chessboardString = chessboardString.concat("\n");
      } else if (count % 2 == 0) {
        chessboardString = chessboardString + "#";
      } else {
        chessboardString = chessboardString + " ";
      }
    }
    console.log(chessboardString);
  }

  chessField(12);

  return (
    <div className="container">
      <main>
        <h1 className="title"></h1>
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

// switch (count) {
//   case count % 3 == 0:
//     console.log("Fizz");
//     break;
//   case count % 5 == 0:
//     console.log("Buzz");
//     break;
//   default:
//     console.log(count);
// }

// for (let count = 0; count <= 100; count = count + 1) {
//   switch (count) {
//     case count % 3 == 0:
//       console.log("Fizz");
//       break;
//     case count % 5 == 0:
//       console.log("Buzz");
//       break;
//     default:
//       console.log(count);
//   }
// }
