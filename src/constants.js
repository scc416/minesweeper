export const numOfBomb = 10;
export const numOfRow = 8;
export const numOfCoordinateToBeFound = numOfRow * numOfRow - numOfBomb;

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

// icon file path
export const FLAG_FILEPATH = require("@/assets/icon/flag.png");
export const MINE_FILEPATH = require("@/assets/icon/mine.png");

// emoji file path
export const SUNGLASS_FILEPATH = require("@/assets/emoji/sunglass.png");
export const DEAD_FILEPATH = require("@/assets/emoji/dead.png");
export const SURPRISED_FILEPATH = require("@/assets/emoji/suprised.png");
export const SMILE_FILEPATH = require("@/assets/emoji/smile.png");

export const initState = {
  startTime: null,
  clicked: [],
  flagged: [],
  bombs: [],
  timer: 0,
  mouseDown: false,
};
