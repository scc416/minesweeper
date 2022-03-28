<template>
  <div @click="click" @click.right="rightClick">
    <img src="" />{{ this.state }}
  </div>
</template>

<script>
import { MINE_FILEPATH } from "../../../constants";

export default {
  props: ["click", "rightClick", "getCoordinateState"],
  data() {
    return {
      MINE_FILEPATH,
    };
  },
  computed: {
    state() {
      return this.getCoordinateState();
    },
  },
  updated() {
    console.log(this.state);
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