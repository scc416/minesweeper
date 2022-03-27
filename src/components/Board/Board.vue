<template>
  <div class="board">
    <Status />
    <Game />
  </div>
</template>

<script>
import Status from "./Status.vue";
import Game from "./Game.vue";

export default { components: { Status, Game } };
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