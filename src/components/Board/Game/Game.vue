<template>
  <div class="game">
    <div v-for="row in num" :key="row" class="row">
      <Coordinate
        v-for="col in num"
        :key="`${row}-${col}`"
        :click="() => click({ row, col })"
      />
    </div>
  </div>
</template>

<script>
import Coordinate from "./Coordinate.vue";

export default {
  props: ["click"],
  data() {
    return {
      num: [0, 1, 2, 3, 4, 5, 6, 7],
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