export const numOfBomb = 10;
export const numOfRow = 8;

export const MINE_FILEPATH = "../../../assets/icon/mine.png";
export const FLAG_FILEPATH = "../../../assets/icon/flag.png";

// state of the game
export const GAME_PENDING = "GAME_PENDING";
export const GAME_ON = "GAME_ON";
export const GAME_WIN = "GAME_WIN";
export const GAME_LOSE = "GAME_LOSE";

// state of each coordinate
export const NONE = "NONE";
export const CLICKED = "CLICKED";
export const FLAGGED = "FLAGGED";
export const EXPLODED = "EXPLODED";
export const EXPLODED_OTHER = "EXPLODED_OTHER";

export const initState = {
  startTime: null,
  clicked: [],
  flagged: [],
  bombs: [],
  numOfCoordinateToBeFound: numOfRow * numOfBomb,
  timer: 0,
};
