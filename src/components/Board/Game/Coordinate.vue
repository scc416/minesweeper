<template>
  <div @click="click"></div>
</template>

<script>
export default { props: ["click"] };
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
}
</style>