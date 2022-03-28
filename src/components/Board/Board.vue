<template>
  <div class="board">
    <Status :newGame="newGame" />
    <Game />
  </div>
</template>

<script>
import Status from "./Status/Status.vue";
import Game from "./Game/Game.vue";
import { initState } from "../../constants";

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
      console.log("NEW GAME");
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