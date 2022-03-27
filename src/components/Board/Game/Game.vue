<template>
  <div class="game">
    <div v-for="row in coordinates" class="row">
      <Coordinate v-for="column in row" />
    </div>
  </div>
</template>

<script>
import Coordinate from "./Coordinate.vue";

export default {
  data() {
    return {
      coordinates: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3, 3, 3, 3],
        [4, 0, 0, 0, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 0],
        [6, 0, 0, 0, 0, 0, 0, 0],
        [7, 0, 0, 0, 0, 0, 0, 0],
      ],
    };
  },
  components: { Coordinate },
};
</script>

<style scoped>
div.game {
  background: #707070;
  border-bottom: #eeeeee solid 0.18em;
  border-right: #eeeeee solid 0.18em;
  border-left: #707070 solid 0.09em;
  border-top: #707070 solid 0.09em;
}

div.row {
  display: flex;
}
</style>