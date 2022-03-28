<template>
  <div class="board" @mouseup="mouseUpFn">
    <Status
      :newGame="newGame"
      :timer="timer"
      :flagged="flagged"
      :gameState="gameState"
      :mouseDown="mouseDown"
    />
    <Game
      :click="click"
      :rightClick="rightClick"
      :getCoordinateState="getCoordinateState"
      :mouseDownFn="mouseDownFn"
      :getAdjacentBombs="getAdjacentBombs"
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
  getAdjacentBombNumWithState,
  addToClicked,
} from "../../helpers";

export default {
  props: ["mouseUpActivity"],
  components: { Status, Game },
  data() {
    return initState;
  },
  methods: {
    mouseDownFn() {
      this.mouseDown = true;
    },
    mouseUpFn() {
      this.mouseDown = false;
    },
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
      this.mouseDown = false;
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
      if (!isClicked && !isFlagged) {
        addToClicked(this.bombs, coordinate, this.clicked);
      }
    },
    rightClick(coordinate) {
      return (e) => {
        e.preventDefault();
        const isNewGame = !this.startTime;
        if (isNewGame) {
          this.startTime = Date.now();
          this.bombs = generateBombs(coordinate);
        }

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
    getAdjacentBombs(coordinate) {
      return getAdjacentBombNumWithState(this.bombs, coordinate);
    },
  },
  computed: {
    gameState() {
      return getGameState(this.startTime, this.clicked, this.bombs);
    },
  },
  mounted() {
    const timeInterval = setInterval(() => {
      if (this.gameState === GAME_ON) this.timer = updateTimer(this.startTime);
    }, 100);
    return () => clearInterval(timeInterval);
  },
  watch: {
    mouseUpActivity() {
      this.mouseUpFn();
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