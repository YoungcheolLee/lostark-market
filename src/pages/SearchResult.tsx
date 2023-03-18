import { useLocation } from "react-router-dom";
import { MarketList } from "../interfaces";

interface Props {
  onClickPageButton?: (pageNo: number) => void;
}

export const SearchResult = (props: Props) => {
  const location = useLocation();
  const marketItemData: MarketList = location.state;

  // 페이지의 총 개수를 구하는 함수
  const getTotalPageNumber = () => {
    const totalItems = marketItemData.TotalCount;
    const itemPageSize = marketItemData.PageSize;

    const totalpageNo = Math.ceil(totalItems / itemPageSize);

    return totalpageNo;
  };

  // page버튼을 만드는 함수
  const makePageButton = () => {
    let pageArr = [];
    for (let i = 1; i <= getTotalPageNumber(); i++) {
      pageArr.push(i);
    }
    return pageArr;
  };

  // 페이지 버튼을 눌렀을 때 실행되는 함수
  const handleClickPageButton = (pageNo: number) => {
    // console.log("SearchResult에서 클릭한 페이지 :", pageNo);
    if (props.onClickPageButton) {
      props.onClickPageButton(pageNo);
    }
  };

  return (
    <div>
      <table className="searchResult-table-wrapper">
        <caption>
          <h2>검색 결과: {marketItemData.TotalCount}개</h2>
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
            <tr key={idx}>
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
      {makePageButton().map((item) => (
        <button key={item} onClick={() => handleClickPageButton(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};
