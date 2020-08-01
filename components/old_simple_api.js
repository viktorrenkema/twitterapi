import * as React from "react";

// Learn more: https://framer.com/api

export default function FetchData(props) {
  const [drink, setDrink] = React.useState(null);
  // https://www.robinwieruch.de/react-hooks-fetch-data
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
      );
      const data = await response.json();
      console.log(data);
      const [item] = data.drinks;
      setDrink(item);
    }
    fetchData();
  }, []);
  console.log(drink);
  return (
    <div>
      {" "}
      {drink && (
        <div>
          <h1>My Cocktails</h1>
          <h3>{drink.strDrink}</h3>
          <p>{drink.strInstructions}</p>
        </div>
      )}
    </div>
  );
}

FetchData.defaultProps = {
  height: 400,
  width: 200,
};
