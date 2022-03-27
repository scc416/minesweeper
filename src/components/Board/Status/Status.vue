<template>
  <div>
    <Score />
    <Emoji />
    <Score />
  </div>
</template>

<script>
import Score from "./Score.vue";
import Emoji from "./Emoji.vue";

export default { components: { Score, Emoji } };
</script>

<style scoped>
div {
  background: #bdbdbd;
  border-left: #787878 solid 0.06em;
  border-top: #787878 solid 0.06em;
  border-bottom: #ffffff solid 0.06em;
  border-right: #ffffff solid 0.06em;
  padding: 0.15em 0.15em;
  margin-bottom: 0.16em;
  font-family: "VT323";
  font-size: 2.8em;
  display: flex;
  justify-content: space-between;
}
</style>