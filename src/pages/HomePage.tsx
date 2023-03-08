import axios from "axios";
import { useEffect, useState } from "react";
import { MarketOption } from "../interfaces/MarketOption";

export const HomePage = () => {
  const [searchOption, setSearchOption] = useState<MarketOption>();

  const marketOption = async () => {
    const optionResponse = await axios.get(
      "https://developer-lostark.game.onstove.com/markets/options",
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    console.log(optionResponse);

    setSearchOption(optionResponse.data);
    console.log("searchOption", searchOption);
  };

  useEffect(() => {
    marketOption();
  }, []);

  useEffect(() => {
    console.log(searchOption);
  }, [searchOption]);

  return <div>Home Page!</div>;
};
