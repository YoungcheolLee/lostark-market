import { useLocation } from "react-router-dom";
import { RequestMarketItems } from "../interfaces";

export const SearchResult = () => {
  const location = useLocation();
  const marketItemData: RequestMarketItems[] = location.state;
  console.log("marketItemData:", marketItemData);
  return (
    <div>
      <table className="searchResult-table-wrapper">
        <caption>검색 결과</caption>
        <thead>
          <tr>
            <th>목록</th>
            <th>요기</th>
            <th>요기</th>
            <th>요기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>이건</th>
            <td>열</td>
            <td>열2</td>
            <td>열23</td>
          </tr>
          <tr>
            <th>이건</th>
            <td>열22</td>
            <td>열2</td>
            <td>열2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
