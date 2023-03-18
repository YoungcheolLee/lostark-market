import { useState } from "react";
import { Header } from "./components/Header";
import { Router } from "./Router";

export const Main = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleClickPage = (pageNo: number) => {
    // console.log("Router.tsx에서 Main.tsx로 전달해준 pageNo:", pageNo);
    setCurrentPage(pageNo);
  };

  return (
    <div className="Main">
      <Header currentPage={currentPage} />
      <Router onClickPageButton={handleClickPage} />
    </div>
  );
};
