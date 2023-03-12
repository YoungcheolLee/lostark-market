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
    if (!currentOption || !currentOption.CategoryCode) {
      throw new Error("카테고리는 필수 입력 값입니다.");
    }
    const marketItemResponse = await axios.post(
      "https://developer-lostark.game.onstove.com/markets/items",
      currentOption,
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

  useEffect(() => {
    console.log("검색옵션이 바뀌었습니다: ", currentOption);
  }, [currentOption]);

  const handleClickSearch = async () => {
    try {
      await postMarketOption();
    } catch (e) {
      alert(e);
    }
  };

  const handleClickCategory = (categoryCode: number) => {
    const requestMarketItem: RequestMarketItems = {
      ...currentOption,
      CategoryCode: categoryCode,
    };

    setCurrentOption(requestMarketItem);
  };

  const handleClickClass = (item: string) => {
    const requestMarketItem: RequestMarketItems = {
      ...currentOption,
      CharacterClass: item,
    };

    setCurrentOption(requestMarketItem);
  };

  return (
    <div>
      <h2>LostArk 거래소</h2>
      <div>
        {marketOption?.Categories.map((item, idx: number) => (
          <button
            key={idx}
            onClick={(e) => {
              handleClickCategory(item.Code);
            }}
          >
            <div>아이템코드: {item.Code}</div>
            <div>코드네임:{item.CodeName}</div>
          </button>
        ))}
        {marketOption?.Classes.map((item, idx: number) => (
          <button key={idx} onClick={() => handleClickClass(item)}>
            {item}
          </button>
        ))}
      </div>
      <input type={"text"} />
      <button onClick={handleClickSearch}>검색</button>
    </div>
  );
};
