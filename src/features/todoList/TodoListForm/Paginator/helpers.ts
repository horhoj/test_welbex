export const getBtnsData = (numberOfPages: number): number[] => {
  const btnsData: number[] = [];

  for (let i = 0; i < numberOfPages; i++) {
    btnsData.push(i + 1);
  }

  return btnsData;
};
