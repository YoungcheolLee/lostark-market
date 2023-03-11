import axios from "axios";
import { useEffect, useState } from "react";
import { MarketOption, RequestMarketItems } from "../interfaces";

export const HomePage = () => {
  const [marketOption, setMarketOption] = useState<MarketOption>();

  const getMarketOption = async () => {
    const marketOptionResponse = await axios.get(
      "https://developer-lostark.game.onstove.com/markets/options",
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    setMarketOption(marketOptionResponse.data);
  };

  const postMarketOption = async () => {
    const myParams: RequestMarketItems = {
      CategoryCode: 40000,
    };
    const postOptionResponse = await axios.post(
      "https://developer-lostark.game.onstove.com/markets/items",
      myParams,
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    console.log("postOptionResponse", postOptionResponse);
  };

  useEffect(() => {
    getMarketOption();
  }, []);

  const handleClick = async () => {
    try {
      await postMarketOption();
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  return (
    <div>
      <h2>LostArk 거래소</h2>
      <div>
        {marketOption?.Categories.map((item, idx: number) => (
          <div>
            <div>{item.Code}</div>
            <div>{item.CodeName}</div>
            <div>
              {item.Subs.map((subsItem) => (
                <div>
                  <div>{subsItem.Code}</div>
                  <div>{subsItem.CodeName}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <input type={"text"} />
      <button onClick={handleClick}>검색</button>
    </div>
  );
};
