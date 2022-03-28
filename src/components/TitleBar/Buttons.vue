<template>
  <div>
    <Button
      ><span class="min"><span>_</span></span></Button
    >
    <Button
      ><span class="max"><span>□</span></span></Button
    >
    <Button><span class="close">×</span></Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default { components: { Button } };
</script>

<style>
span.min {
  position: relative;
  bottom: 0.17em;
  font-weight: 800;
  font-size: 0.9em;
}

span.min > * {
  position: relative;
  bottom: 0.025em;
}

span.max {
  font-size: 1.8em;
}

span.max > * {
  position: relative;
  bottom: 0.04em;
}

span.close {
  font-size: 1.3em;
}
</style>