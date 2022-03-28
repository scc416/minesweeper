<template>
  <div class="board">
    <Status :newGame="newGame" :startTime="startTime" :bombsLeft="bombsLeft" />
    <Game :click="click" />
  </div>
</template>

<script>
import Status from "./Status/Status.vue";
import Game from "./Game/Game.vue";
import { initState, numOfBomb } from "../../constants";
import {
  isInArray,
  generateBombs,
  calculateBombsLeft,
  // updateTimer,
} from "../../helpers";

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