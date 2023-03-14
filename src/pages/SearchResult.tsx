import { useLocation } from "react-router-dom";
import { MarketList, RequestMarketItems } from "../interfaces";

export const SearchResult = () => {
  const location = useLocation();
  const marketItemData: MarketList = location.state;
  console.log("marketItemData:", marketItemData);

  return (
    <div>
      <table className="searchResult-table-wrapper">
        <caption>
          <h2>검색 결과</h2>
        </caption>
        <thead>
          <tr>
            <th>아이템</th>
            <th>등급</th>
            <th>전일 평균 거래가</th>
            <th>최근 거래가</th>
            <th>최저가</th>
          </tr>
        </thead>
        <tbody>
          {marketItemData.Items.map((item, idx) => (
            <tr>
              <td>
                <img className="itemImg" src={item.Icon} alt={"itemImg"} />
                {item.Name}
              </td>
              <td>{item.Grade}</td>
              <td>{item.YDayAvgPrice}</td>
              <td>{item.RecentPrice}</td>
              <td>{item.CurrentMinPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
