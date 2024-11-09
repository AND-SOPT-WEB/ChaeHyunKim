import * as S from "./RankingHeader.style";

const RankingHeader = ({ handleReset }) => {
  return (
    <S.Header>
      <S.Title>랭킹</S.Title>
      <S.Button onClick={handleReset}>초기화</S.Button>
    </S.Header>
  );
};

export default RankingHeader;
