<template>
  <div class="game" @mousedown="mouseDownFn">
    <div v-for="row in numArr" :key="row" class="row">
      <Coordinate
        v-for="col in numArr"
        :key="`${row}-${col}`"
        :rightClick="rightClick({ row, col })"
        :click="() => click({ row, col })"
        :getCoordinateState="() => getCoordinateState({ row, col })"
        :getAdjacentBombs="getAdjacentBombs({ row, col })"
      />
    </div>
  </div>
</template>

<script>
import Coordinate from "./Coordinate.vue";
import { numOfRow } from "../../../constants";
import { makeNumArr } from "../../../helpers";

export default {
  props: [
    "click",
    "rightClick",
    "getCoordinateState",
    "mouseDownFn",
    "getAdjacentBombs",
  ],
  data() {
    return {
      numArr: makeNumArr(numOfRow),
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