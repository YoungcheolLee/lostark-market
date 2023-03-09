import axios from "axios";
import { useEffect, useState } from "react";
import { MarketOption } from "../interfaces/MarketOption";

export const HomePage = () => {
  const [category, setCategory] = useState<MarketOption[]>([]);
  const [itemGrade, setItemGrade] = useState<MarketOption[]>([]);
  const [itemTier, setItemTier] = useState<MarketOption[]>([]);
  const [Class, setClass] = useState<MarketOption[]>([]);

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
    console.log("optionResponse", optionResponse);

    const optionCategory = optionResponse.data.Categories;
    setCategory(optionCategory);

    const optionItemGrade = optionResponse.data.ItemGrades;
    setItemGrade(optionItemGrade);

    const optionItemTier = optionResponse.data.ItemTiers;
    setItemTier(optionItemTier);

    const optionClass = optionResponse.data.Classes;
    setClass(optionClass);
  };

  // const postMarketOption = async () => {
  //   const postOptionResponse = await axios.post(
  //     "https://developer-lostark.game.onstove.com/markets/options",
  //   )
  // }

  useEffect(() => {
    marketOption();
    console.log("useEffect market");
  }, []);

  useEffect(() => {
    console.log("useEffect category", category);
  }, [category]);

  return (
    <div>
      Home Page!
      {category.map((item: MarketOption, idx: number) => (
        <div key={idx}>
          {item.ItemGrades}
          <div>{item.ItemTiers}</div>
        </div>
      ))}
    </div>
  );
};
