<template>
  <div class="title-bar">
    <Title />
    <div class="buttons">
      <div></div>
      <div></div>
      <div>×</div>
    </div>
  </div>
</template>

<script>
import Title from "./Title.vue";

export default { components: { Title } };
</script>

<style scoped>
.title-bar {
  display: flex;
  justify-content: space-between;
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