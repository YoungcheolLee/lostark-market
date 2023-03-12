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

  const handleClickTier = (item: number) => {
    const requestMarketItem: RequestMarketItems = {
      ...currentOption,
      ItemTier: item,
    };

    setCurrentOption(requestMarketItem);
  };

  const handleClickGrade = (item: string) => {
    const requestMarketItem: RequestMarketItems = {
      ...currentOption,
      ItemGrade: item,
    };

    setCurrentOption(requestMarketItem);
  };

  const handleChangeItemName = (item: string) => {
    const requestMarketItem: RequestMarketItems = {
      ...currentOption,
      ItemName: item,
    };

    setCurrentOption(requestMarketItem);
  };

  return (
    <div>
      <h2>LostArk 거래소</h2>
      <div>
        <div>
          <p>카테고리</p>
          {marketOption?.Categories.map((item, idx: number) => (
            <button
              key={idx}
              onClick={(e) => {
                handleClickCategory(item.Code);
              }}
            >
              <div>{item.Code}</div>
              <div>{item.CodeName}</div>
            </button>
          ))}
        </div>
        <div>
          <p>캐릭터 클래스</p>
          {marketOption?.Classes.map((item, idx: number) => (
            <button key={idx} onClick={() => handleClickClass(item)}>
              {item}
            </button>
          ))}
        </div>
        <div>
          <p>아이템 티어</p>
          {marketOption?.ItemTiers.map((item, idx) => (
            <button key={idx} onClick={() => handleClickTier(item)}>
              {item}
            </button>
          ))}
        </div>
        <div>
          <p>아이템 등급</p>
          {marketOption?.ItemGrades.map((item, idx) => (
            <button key={idx} onClick={() => handleClickGrade(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <input
        type={"text"}
        value={currentOption?.ItemName}
        onChange={(e) => handleChangeItemName(e.target.value)}
      />
      <button onClick={handleClickSearch}>검색</button>
    </div>
  );
};
