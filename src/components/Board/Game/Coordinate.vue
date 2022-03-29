<template>
  <div @click="click" @click.right="rightClick" :class="className">
    <img :src="iconSrc" alt="" />{{ numOfBombs && numOfBombs }}
  </div>
</template>

<script>
import {
  FLAGGED,
  EXPLODED,
  EXPLODED_OTHER,
  CLICKED,
  MINE_FILEPATH,
  FLAG_FILEPATH,
} from "../../../constants";

export default {
  props: ["click", "rightClick", "getCoordinateState", "getAdjacentBombs"],
  computed: {
    state() {
      return this.getCoordinateState();
    },
    iconSrc() {
      return this.state === FLAGGED
        ? FLAG_FILEPATH
        : this.state === EXPLODED || this.state === EXPLODED_OTHER
        ? MINE_FILEPATH
        : "";
    },
    className() {
      return this.state === CLICKED
        ? "clicked"
        : this.state === EXPLODED
        ? "bomb"
        : "";
    },
    numOfBombs() {
      return this.getAdjacentBombs(this.state);
    },
  },
};
</script>

<style scoped>
div {
  height: 1.5em;
  width: 1.5em;
  border-left: #eeeeee solid 0.12em;
  border-top: #eeeeee solid 0.12em;
  border-right: #000 solid 0.12em;
  border-bottom: #000 solid 0.12em;
  background: #c0c0c0;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 1em;
}

.clicked {
  border: #000 dotted 0.12em;
}

.bomb {
  background: #fb0400;
}
</style>