<template>
  <div @click="click" @click.right="rightClick">
    <img :src="iconSrc" alt="" />
  </div>
</template>

<script>
import { FLAGGED, EXPLODED } from "../../../constants";

export default {
  props: ["click", "rightClick", "getCoordinateState"],
  computed: {
    state() {
      return this.getCoordinateState();
    },
    iconSrc() {
      return this.state === FLAGGED
        ? require("../../../assets/icon/flag.png")
        : this.state === EXPLODED
        ? require("../../../assets/icon/mine.png")
        : "";
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
</style>