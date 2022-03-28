<template>
  <div class="board">
    <Status :newGame="newGame" />
    <Game :click="click" />
  </div>
</template>

<script>
import Status from "./Status/Status.vue";
import Game from "./Game/Game.vue";
import { initState, numOfBomb } from "../../constants";
import { isInArray, generateBombs } from "../../helpers";

export default {
  components: { Status, Game },
  data() {
    return initState;
  },
  methods: {
    newGame() {
      this.startTime = null;
      this.clicked = [];
      this.labelledBombs = [];
      this.bombs = [];
    },
    click(coordinate) {
      console.log(coordinate);
      const isNewGame = !this.startTime;
      if (isNewGame) {
        this.startTime = Date.now();
        this.bombs = generateBombs(coordinate, numOfBomb);
      }

      const alreadyClicked = isInArray(this.clicked, coordinate);
      if (!alreadyClicked) this.clicked.push(coordinate);
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