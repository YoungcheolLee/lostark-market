import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SearchResult } from "./pages/SearchResult";
import { TestPage } from "./pages/TestPage";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/searchResult" element={<SearchResult />} />
    </Routes>
  );
};
