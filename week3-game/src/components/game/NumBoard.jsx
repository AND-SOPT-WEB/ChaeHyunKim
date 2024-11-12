import React from "react";
import * as S from "./NumBoard.style";

const NumBoard = ({ numbers, gridSize, nextNum, handleNumClick }) => (
  <S.NumBoard $gridSize={gridSize}>
    {numbers.map((num, index) => (
      <S.NumBox
        key={`box-${index}`}
        $isEmpty={num.value === null}
        $isNew={num.isNew}
        onClick={() => num && handleNumClick(num, index)}
      >
        {num.value}
      </S.NumBox>
    ))}
  </S.NumBoard>
);

export default NumBoard;
