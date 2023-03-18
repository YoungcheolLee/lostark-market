import { useState } from "react";
import { Header } from "./components/Header";
import { Router } from "./Router";

export const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClickPageButton = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  return (
    <div className="Main">
      <Header currentPage={currentPage} />
      <Router onClickPageButton={handleClickPageButton} />
    </div>
  );
};
