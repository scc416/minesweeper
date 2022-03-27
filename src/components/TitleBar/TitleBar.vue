<template>
  <div>
    <Title />
    <Buttons />
  </div>
</template>

<script>
import Title from "./Title.vue";
import Buttons from "./Button.vue";

export default { components: { Title, Buttons } };
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
</style>