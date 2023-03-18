import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MarketList, MarketOption, RequestMarketItems } from "../interfaces";

interface Props {
  currentPage: number;
}

export const Header = (props: Props) => {
  // user가 선택할 수 있는 옵션 state
  const [marketOption, setMarketOption] = useState<MarketOption>();

  // user가 선택한 옵션에 해당하는 데이터를 보관하는 state
  const [currentOption, setCurrentOption] = useState<RequestMarketItems>({
    CategoryCode: 20000,
    PageNo: props.currentPage,
  });

  // 페이지 이동에 필요한 기능
  const navigate = useNavigate();

  // user가 선택할 수 있는 옵션들을 HTTP통신을 통해 API요청 하여 marketOption state에 저장하는 함수
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

  // user가 선택한 옵션(currentOption)에 해당하는 데이터들을 HTTP통신을 통해 API 요청하여
  // searchResult 컴포넌트로 데이터들과 함께 이동하는 함수
  const postMarketOption = async () => {
    if (!currentOption || !currentOption.CategoryCode) {
      throw new Error("카테고리는 필수 입력 값입니다.");
    }
    const marketItemResponse = await axios.post<MarketList>(
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

  // 페이지가 처음 렌더링될때 한번만 getMarketOption 함수를 실행시키는 함수
  useEffect(() => {
    getMarketOption();
  }, []);

  // 유저가 옵션을 바꿀때마다 실행되는 함수
  useEffect(() => {
    // console.log("검색옵션이 바뀌었습니다: ", currentOption);
  }, [currentOption]);

  // 검색 버튼이 클릭 됬을 때 postMarketOption함수를 실행시켜주는 함수
  const handleClickSearch = async () => {
    try {
      // const currentPage = 1;
      // props.currentPage(currentPage);
      await postMarketOption();
    } catch (e) {
      alert(e);
    }
  };

  //
  const handleClickTitle = () => {
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
      <h2 className="title" onClick={handleClickTitle}>
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
