<template>
  <div>
    <Button><b>_</b></Button>
    <Button>🗕</Button>
    <Button><span>×</span></Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default { components: { Button } };
</script>

<style scoped>
b {
  position: relative;
  bottom: 0.17em;
  font-weight: 800;
}

span {
  font-size: 1.5em;
}
</style>