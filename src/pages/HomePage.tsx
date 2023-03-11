import axios from "axios";
import { useEffect, useState } from "react";
import { MarketOption, RequestMarketItems } from "../interfaces";

export const HomePage = () => {
  const [marketOption, setMarketOption] = useState<MarketOption>();
  const [currentOption, setCurrentOption] = useState<RequestMarketItems>();

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
    const myParams: RequestMarketItems = currentOption
      ? currentOption
      : {
          CategoryCode: 20000,
        };
    const marketItemResponse = await axios.post(
      "https://developer-lostark.game.onstove.com/markets/items",
      myParams,
      {
        headers: {
          accept: "application/json",
          authorization: process.env.REACT_APP_LOSTARK_APIKEY,
        },
      }
    );
    console.log("marketItemResponse", marketItemResponse);
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

  const handleClickCategory = (categoryCode: number) => {
    const requestMarketItem: RequestMarketItems = {
      CategoryCode: categoryCode,
    };

    setCurrentOption(requestMarketItem);
  };

  return (
    <div>
      <h2>LostArk 거래소</h2>
      <div>
        {marketOption?.Categories.map((item, idx: number) => (
          <button
            onClick={(e) => {
              handleClickCategory(item.Code);
            }}
          >
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
          </button>
        ))}
      </div>
      <input type={"text"} />
      <button onClick={handleClick}>검색</button>
    </div>
  );
};
