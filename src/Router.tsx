import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchResult } from "./pages/SearchResult";
import { TestPage } from "./pages/TestPage";

interface Props {
  onClickPageButton?: (pageNo: number) => void;
}

export const Router = ({ onClickPageButton }: Props) => {
  const handleClickPageButton = (pageNo: number) => {
    if (onClickPageButton) {
      onClickPageButton(pageNo);
      // console.log("SearchResult에서 Router로 전달해준 pageNo:", pageNo);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route
        path="/searchResult"
        element={<SearchResult onClickPageButton={handleClickPageButton} />}
      />
    </Routes>
  );
};
