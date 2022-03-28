<template>
  <div class="board">
    <Status :newGame="newGame" :startTime="startTime" :flagged="flagged" />
    <Game :click="click" :rightClick="rightClick" />
  </div>
</template>

<script>
import Status from "./Status/Status.vue";
import Game from "./Game/Game.vue";
import { initState, numOfRow } from "../../constants";
import { isInArray, generateBombs, removeCoordinate } from "../../helpers";

export default {
  components: { Status, Game },
  data() {
    return { ...initState };
  },
  computed: {
    isEnded() {
      for (const bomb of this.bombs) {
        const isClicked = isInArray(this.clicked, bomb);
        if (isClicked) return true;
      }
    },
  },
  methods: {
    newGame() {
      this.startTime = null;
      this.clicked = [];
      this.flagged = [];
      this.bombs = [];
    },
    click(coordinate) {
      const isNewGame = !this.startTime;
      if (isNewGame) {
        this.startTime = Date.now();
        this.bombs = generateBombs(coordinate, numOfRow);
      }

      const alreadyClicked = isInArray(this.clicked, coordinate);
      if (!alreadyClicked) this.clicked.push(coordinate);
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