const isSameCoordinate = (co1, co2) => {
  const { row: row1, col: col1 } = co1;
  const { row: row2, col: col2 } = co2;
  const sameRow = row1 === row2;
  const sameCol = col1 === col2;
  if (sameCol && sameRow) return true;
};

export const isInArray = (arr, co1) => {
  for (const co2 of arr) {
    const sameCoordinate = isSameCoordinate(co1, co2);
    if (sameCoordinate) return true;
  }
};

const makeRandomNum = (num) => {
  const randomFloat = Math.random();
  const randomLarger = randomFloat * num;
  const wholeNum = Math.floor(randomLarger);
  return wholeNum;
};

const makeRandomCoordinate = (num) => {
  const row = makeRandomNum(num);
  const col = makeRandomNum(num);
  return { row, col };
};

export const generateBombs = (firstCoordinate, numOfBomb) => {
  const bombs = [];

  for (let i = 0; i < numOfBomb; i++) {
    let coordinate = null;
    while (
      !coordinate ||
      isInArray(bombs, coordinate) ||
      isSameCoordinate(coordinate, firstCoordinate)
    ) {
      coordinate = makeRandomCoordinate(numOfBomb);
    }
    bombs.push(coordinate);
  }

  return bombs;
};

export const timeFormatter = (time) => {
  if (time > 999) return "999";
  if (time > 99) return `${time}`;
  if (time > 9) return `0${time}`;
  return `00${time}`;
};

export const calculateBombsLeft = (startTime, numOfBomb, labelledBombs) => {
  if (!startTime) return 0;
  return numOfBomb - labelledBombs.length;
};
