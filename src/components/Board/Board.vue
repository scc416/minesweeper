<template>
  <div class="board">
    <Status :newGame="newGame" :timer="timer" :bombsLeft="bombsLeft" />
    <Game :click="click" />
  </div>
</template>

<script>
import Status from "./Status/Status.vue";
import Game from "./Game/Game.vue";
import { initState, numOfBomb } from "../../constants";
import { isInArray, generateBombs, calculateBombsLeft } from "../../helpers";

export default {
  components: { Status, Game },
  data() {
    return { ...initState };
  },
  methods: {
    newGame() {
      this.startTime = null;
      this.timer = 0;
      this.clicked = [];
      this.labelledBombs = [];
      this.bombs = [];
      this.bombsLeft = 0;
    },
    click(coordinate) {
      const isNewGame = !this.startTime;
      if (isNewGame) {
        this.startTime = Date.now();
        this.bombs = generateBombs(coordinate, numOfBomb);
      }

      const alreadyClicked = isInArray(this.clicked, coordinate);
      if (!alreadyClicked) this.clicked.push(coordinate);

      this.bombsLeft = calculateBombsLeft(
        this.startTime,
        numOfBomb,
        this.labelledBombs
      );
    },
  },
  mounted() {
    const timeInterval = setInterval(() => {
      const now = Date.now();
      if (this.startTime) {
        const timerMilli = now - this.startTime;
        this.timer = Math.floor(timerMilli / 1000);
      }
      if (!this.startTime) this.timer = 0;
    }, 10);
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