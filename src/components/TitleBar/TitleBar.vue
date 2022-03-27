<template>
  <div class="title-bar">
    <div class="title">
      <img src="../../../public/favicon.png" />
      <span>Minesweeper</span>
    </div>
    <div class="buttons">
      <div></div>
      <div></div>
      <div>×</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title-bar {
  display: flex;
  justify-content: space-between;
}

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

div.class > * {
  padding: 0.05em 0.01em 0.05em 0.08em;
}

.buttons {
  display: flex;
}

.buttons > * {
  background: #bebebe;
}
</style>