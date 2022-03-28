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

export const makeNumArr = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(num);
  }
  return arr;
};

export const removeCoordinate = (arr, co) => {
  return arr.filter((c) => !isSameCoordinate(c, co));
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

export const generateBombs = (firstCoordinate, numOfRow) => {
  const bombs = [];

  for (let i = 0; i < numOfRow; i++) {
    let coordinate = null;
    while (
      !coordinate ||
      isInArray(bombs, coordinate) ||
      isSameCoordinate(coordinate, firstCoordinate)
    ) {
      coordinate = makeRandomCoordinate(numOfRow);
    }
    bombs.push(coordinate);
  }

  return bombs;
};

export const numFormatter = (time) => {
  if (time > 999) return "999";
  if (time > 99) return `${time}`;
  if (time > 9) return `0${time}`;
  if (time < 0) return "000";
  return `00${time}`;
};

export const calculateBombsLeft = (startTime, numOfBomb, labelledBombs) => {
  if (!startTime) return 0;
  const bombsLeft = numOfBomb - labelledBombs.length;
  return bombsLeft;
};

export const updateTimer = (startTime) => {
  if (!startTime) return 0;
  const now = Date.now();
  const timerMilli = now - startTime;
  return Math.floor(timerMilli / 1000);
};
