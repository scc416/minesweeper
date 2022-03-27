<template>
  <span>{{ symbol }}</span>
</template>

<script>
export default { props: ["symbol"] };
</script>

<style scoped>
span {
  background: #bebebe;
  width: 1em;
  height: 1em;
}
</style>