<template>
  <div>
    <Score />
    <Score />
  </div>
</template>

<script>
import Score from "./Score.vue";

export default { components: { Score } };
</script>

<style scoped>
div {
  background: #bdbdbd;
  border-left: #787878 solid 0.12em;
  border-top: #787878 solid 0.12em;
  border-bottom: #ffffff solid 0.12em;
  border-right: #ffffff solid 0.12em;
  padding: 0.2em 0.2em;
  margin-bottom: 0.42em;
  font-family: "VT323";
  font-size: 2em;
  display: flex;
  justify-content: space-between;
}
</style>