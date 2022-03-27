<template>
  <div class="title">
    <img src="../../../public/favicon.png" />
    <span>Minesweeper</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.title {
  display: flex;
  align-items: center;
  background: #00007b;
  color: #ffffff;
  font-weight: 600;
}

img {
  height: 1.5em;
}

div > * {
  padding: 0.05em 0.01em 0.05em 0.08em;
}

</style>