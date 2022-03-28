<template>
  <div class="board">
    <Status
      :newGame="newGame"
      :startTime="startTime"
      :gameOn="gameOn"
      :flagged="flagged"
    />
    <Game
      :click="click"
      :rightClick="rightClick"
      :getCoordinateState="getCoordinateState"
    />
  </div>
</template>

<script>
import Status from "./Status/Status.vue";
import Game from "./Game/Game.vue";
import {
  initState,
  GAME_PENDING,
  GAME_ON,
  GAME_WIN,
  GAME_LOSE,
} from "../../constants";
import {
  generateBombs,
  removeCoordinate,
  checkIfClickedFlagged,
  getGameState,
  getCoordinateState,
} from "../../helpers";

export default {
  components: { Status, Game },
  data() {
    return initState;
  },
  methods: {
    getCoordinateState(coordinate) {
      return getCoordinateState(
        this.clicked,
        this.flagged,
        this.bombs,
        this.gameState,
        coordinate
      );
    },
    newGame() {
      this.startTime = null;
      this.clicked = [];
      this.flagged = [];
      this.bombs = [];
    },
    click(coordinate) {
      if (this.gameState === GAME_WIN || this.gameState === GAME_LOSE) return;
      const isNewGame = !this.startTime;
      if (isNewGame) {
        this.startTime = Date.now();
        this.bombs = generateBombs(coordinate);
      }
      const { isClicked, isFlagged } = checkIfClickedFlagged(
        this.clicked,
        this.flagged,
        coordinate
      );
      if (!isClicked && !isFlagged) this.clicked.push(coordinate);
    },
    rightClick(coordinate) {
      if (this.gameState === GAME_WIN || this.gameState === GAME_LOSE) return;
      return (e) => {
        e.preventDefault();
        const { isClicked, isFlagged } = checkIfClickedFlagged(
          this.clicked,
          this.flagged,
          coordinate
        );
        if (!isFlagged && !isClicked) this.flagged.push(coordinate);
        if (isFlagged) {
          this.flagged = removeCoordinate(this.flagged, coordinate);
        }
      };
    },
  },
  computed: {
    gameState() {
      return getGameState(
        this.startTime,
        this.clicked,
        this.bombs,
        this.numOfCoordinateToBeFound
      );
    },
    gameOn() {
      return this.gameState === GAME_ON || this.gameState === GAME_PENDING;
    },
  },
};
</script>

<style scoped>
div.board {
  background: #bebebe;
  border-left: #eeeeee solid 0.18em;
  border-top: #eeeeee solid 0.26em;
  border-bottom: #707070 solid 0.18em;
  border-right: #707070 solid 0.18em;
  padding: 0.45em 0.35em 0.35em 0.35em;
}
</style>