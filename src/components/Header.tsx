import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MarketOption, RequestMarketItems } from "../interfaces";

export const Header = () => {
  const [marketOption, setMarketOption] = useState<MarketOption>();
  const [currentOption, setCurrentOption] = useState<RequestMarketItems>({
    CategoryCode: 20000,
  });
  const navigate = useNavigate();

  const getMarketOption = async () => {
    const marketOptionResponse = await axios.get<MarketOption>(
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

    navigate("/searchResult", { state: marketItemResponse.data });
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

  const handleTitle = () => {
    navigate("/", { state: getMarketOption() });
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
      <h2 className="title" onClick={handleTitle}>
        LostArk 거래소
      </h2>
      <div>
        <div>
          <p>카테고리</p>
          {marketOption?.Categories.map((item, idx: number) => (
            <button
              className={[
                "optionBtn",
                currentOption?.CategoryCode === item.Code ? "Current" : "",
              ].join("")}
              key={idx}
              onClick={() => {
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
            <button
              className={[
                "optionBtn",
                currentOption?.CharacterClass === item ? "Current" : "",
              ].join("")}
              key={idx}
              onClick={() => handleClickClass(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div>
          <p>아이템 티어</p>
          {marketOption?.ItemTiers.map((item, idx) => (
            <button
              className={[
                "optionBtn",
                currentOption?.ItemTier === item ? "Current" : "",
              ].join("")}
              key={idx}
              onClick={() => handleClickTier(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div>
          <p>아이템 등급</p>
          {marketOption?.ItemGrades.map((item, idx) => (
            <button
              className={[
                "optionBtn",
                currentOption?.ItemGrade === item ? "Current" : "",
              ].join("")}
              key={idx}
              onClick={() => handleClickGrade(item)}
            >
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
