<template>
  <div class="board">
    <Status :newGame="newGame" :startTime="startTime" :flagged="flagged" />
    <Game :click="click" :rightClick="rightClick" />
  </div>
</template>

<script>
import Status from "./Status/Status.vue";
import Game from "./Game/Game.vue";
import {
  initState,
  numOfRow,
  GAME_PENDING,
  GAME_ON,
  GAME_WIN,
  GAME_LOSE,
  numOfBomb,
} from "../../constants";
import { isInArray, generateBombs, removeCoordinate } from "../../helpers";

export default {
  components: { Status, Game },
  data() {
    return { ...initState, numOfCoordinateToBeFound: numOfRow * numOfBomb };
  },
  methods: {
    newGame() {
      this.startTime = null;
      this.clicked = [];
      this.flagged = [];
      this.bombs = [];
      console.log(this.gameState);
    },
    click(coordinate) {
      const isNewGame = !this.startTime;
      if (isNewGame) {
        this.startTime = Date.now();
        this.bombs = generateBombs(coordinate, numOfRow);
      }
      const alreadyClicked = isInArray(this.clicked, coordinate);
      if (!alreadyClicked) this.clicked.push(coordinate);
      console.log(this.gameState);
      console.log(this.clicked);
      console.log(this.bombs);
    },
    rightClick(coordinate) {
      return (e) => {
        e.preventDefault();
        const alreadyFlagged = isInArray(this.flagged, coordinate);
        if (!alreadyFlagged) this.flagged.push(coordinate);
        if (alreadyFlagged) {
          this.flagged = removeCoordinate(this.flagged, coordinate);
        }
      };
    },
  },
  computed: {
    gameState() {
      const gameStarted = this.startTime;
      if (!gameStarted) return GAME_PENDING;

      for (const bomb of this.bombs) {
        const isClicked = isInArray(this.clicked, bomb);
        if (isClicked) return GAME_LOSE;
      }

      const numOfClicked = this.clicked.length;
      const allClicked = numOfClicked - this.numOfCoordinateToBeFound === 0;
      if (allClicked) return GAME_WIN;

      return GAME_ON;
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