<template>
  <div class="board">
    <Status :newGame="newGame" :timer="timer" :flagged="flagged" />
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
  updateTimer,
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
      this.timer = 0;
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
      return (e) => {
        e.preventDefault();
        if (this.gameState === GAME_WIN || this.gameState === GAME_LOSE) return;
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
  },

  mounted() {
    const timeInterval = setInterval(() => {
      if (this.gameState === GAME_ON) this.timer = updateTimer(this.startTime);
    }, 100);
    return () => clearInterval(timeInterval);
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