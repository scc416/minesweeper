<template>
  <span
    ><span>{{ text.slice(0, 1) }}</span
    >{{ text.slice(1) }}</span
  >
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
span {
  padding: 0 0 0 0.25em;
}

span > span {
  text-decoration: underline;
}
</style>