<template>
  <div @click="click">
    <img src="" />
  </div>
</template>

<script>
import { MINE_FILEPATH } from "../../../constants";

export default {
  props: ["click"],
  data() {
    return {
      MINE_FILEPATH,
    };
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