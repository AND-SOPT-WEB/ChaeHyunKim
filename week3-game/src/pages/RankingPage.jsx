import React, { useState } from "react";
import { getGameResults, resetGameResults } from "@utils/data";
import RankingHeader from "@components/ranking/RankingHeader";
import RankingTable from "@components/ranking/RankingTable";

const RankingPage = () => {
  const [gameResult, setGameResult] = useState(getGameResults);

  const handleReset = () => {
    resetGameResults();
    setGameResult(getGameResults()); // 초기화 후 업데이트
  };

  return (
    <>
      <RankingHeader handleReset={handleReset} />
      <RankingTable data={gameResult} />
    </>
  );
};

export default RankingPage;
