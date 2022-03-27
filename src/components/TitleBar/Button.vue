<template>
  <span>{{ symbol }}</span>
</template>

<script>
export default { props: ["symbol"] };
</script>

<style scoped>
span {
  background: #bebebe;
  width: 1.2em;
  height: 1.2em;
  margin: 0.1em 0.1em 0.1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
}
</style>