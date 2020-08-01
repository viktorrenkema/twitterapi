import * as React from "react";

export default function FetchData(props) {
  const [fetched, setFetched] = React.useState(null);

  let data;

  let mydata;
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        proxyurl +
          "https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=vrenkema&skip_status=true&include_user_entities=false",
        {
          headers: {
            Authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAAL%2FAFgEAAAAAxXXFVp%2BRE46PUs%2F9SY78NLF%2FJxg%3DLOblozz798DfaRJ9dUuYf1NPvnTDCv9twVshNPDy3KHoch44vu",
          },
        }
      );
      data = await response.json();
      const mydata = data.users; // no idea what we do here
      setFetched(true);
      console.log(
        "data = " + data,
        "mydata = " + mydata,
        "data.users = " + data.myusers
      );
    }
    fetchData();
  }, []);

  console.log(data, mydata);

  return (
    <div>
      <h1>Followers for @vrenkema</h1>
      {console.log(fetched, data)}
      {fetched && (
        <div>
          {/* {" "}
          {data.users.forEach((user) => {
            return <div>{<p>{user.name}</p>}</div>;
          })} */}
          hey
        </div>
        // <div>
        //   <h1>Followers for @vrenkema</h1>
        //   <h3>{drink.screen_name}</h3>
        //   {drink}
        //   {data.users}
        // </div>
      )}
    </div>
  );
}

FetchData.defaultProps = {
  height: 400,
  width: 200,
};

// fetch(
//   "https://api.twitter.com/1.1/followers/list.json?cursor=-1&screen_name=twitterdev&skip_status=true&include_user_entities=false",
//   {
//     headers: {
//       Authorization:
//         "Bearer AAAAAAAAAAAAAAAAAAAAAL%2FAFgEAAAAAxXXFVp%2BRE46PUs%2F9SY78NLF%2FJxg%3DLOblozz798DfaRJ9dUuYf1NPvnTDCv9twVshNPDy3KHoch44vu",
//     },
//   }
// );

// Notes

// CORS bypass: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
// https://www.robinwieruch.de/react-hooks-fetch-data
// https://kigiri.github.io/fetch/
