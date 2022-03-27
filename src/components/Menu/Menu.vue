<template>
  <div>
    <Button text="Game" />
    <Button text="Help" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default { components: { Button } };
</script>

<style scoped>
div {
  background: #bdbdbd;
  border-top: #eeeeee solid 0.16em;
  padding: 0.14em 0;
  font-size: 0.9em;
}
</style>