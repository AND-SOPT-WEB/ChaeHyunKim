// 숫자 무작위로 섞는 함수
export const shuffle = (array) => {
  const NewArray = [...array];
  for (let i = NewArray.length - 1; i > 0; i--) {
    // 랜덤으로 index 선택
    const j = Math.floor(Math.random() * (i + 1));
    // 선택한 요소와 현재 요소 바꾸기
    [NewArray[i], NewArray[j]] = [NewArray[j], NewArray[i]];
  }
  return NewArray;
};
