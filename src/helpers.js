import {
  numOfRow,
  numOfBomb,
  GAME_PENDING,
  GAME_ON,
  GAME_WIN,
  GAME_LOSE,
  NONE,
  CLICKED,
  FLAGGED,
  EXPLODED,
} from "./constants";

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
    arr.push(i);
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

export const generateBombs = (firstCoordinate) => {
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

export const calculateBombsLeft = (startTime, labelledBombs) => {
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

export const checkIfClickedFlagged = (clicked, flagged, coordinate) => {
  const isClicked = isInArray(clicked, coordinate);
  const isFlagged = isInArray(flagged, coordinate);
  return { isClicked, isFlagged };
};

export const getGameState = (startTime, clicked, bombs, numOfCoordinate) => {
  const gameStarted = startTime;
  if (!gameStarted) return GAME_PENDING;

  for (const bomb of bombs) {
    const isClicked = isInArray(clicked, bomb);
    if (isClicked) return GAME_LOSE;
  }

  const numOfClicked = clicked.length;
  const allClicked = numOfClicked - numOfCoordinate === 0;
  if (allClicked) return GAME_WIN;

  return GAME_ON;
};

export const getCoordinateState = (clicked, flagged, bombs, coordinate) => {
  const { isClicked, isFlagged } = checkIfClickedFlagged(
    clicked,
    flagged,
    coordinate
  );
  const isBomb = isInArray(bombs, coordinate);

  if (isBomb && isClicked) return EXPLODED;
  if (isFlagged) return FLAGGED;
  if (isClicked) return CLICKED;
  return NONE;
};
