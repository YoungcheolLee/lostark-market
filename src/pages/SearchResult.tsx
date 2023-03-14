import { useLocation } from "react-router-dom";
import { RequestMarketItems } from "../interfaces";

export const SearchResult = () => {
  const location = useLocation();
  const marketItemData: RequestMarketItems[] = location.state;
  console.log("marketItemData:", marketItemData);
  return (
    <div>
      <table className="searchResult-table-wrapper">
        <caption>
          <h2>검색 결과</h2>
        </caption>
        <thead>
          <tr>
            <th>등급</th>
            <th>전일 평균 거래가</th>
            <th>최근 거래가</th>
            <th>최저가</th>
          </tr>
        </thead>
        <tbody>
          {/* {marketItemData.Items} */}
          <tr>
            <th>이건</th>
          </tr>
          <tr>
            <th>이건</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
