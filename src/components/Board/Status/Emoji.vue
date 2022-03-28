<template>
  <span @click="newGame"><img :src="iconSrc" /></span>
</template>

<script>
import { GAME_WIN, GAME_LOSE } from "../../../constants";

export default {
  props: ["newGame", "gameState"],
  computed: {
    iconSrc() {
      return this.gameState === GAME_WIN
        ? require("../../../assets/emoji/sunglass.png")
        : this.gameState === GAME_LOSE
        ? require("../../../assets/emoji/dead.png")
        : require("../../../assets/emoji/smile.png");
    },
    // export const SURPRISED_FILEPATH = "../../../assets/emoji/suprised.png";
  },
};
</script>

<style scoped>
span {
  background: #bfbfc0;
  height: 0.66em;
  width: 0.66em;
  border-right: #262626 solid 0.055em;
  border-bottom: #262626 solid 0.055em;
  border-top: #959595 solid 0.04em;
  border-left: #959595 solid 0.04em;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 0.5em;
  position: relative;
  left: 0.008em;
}
</style>