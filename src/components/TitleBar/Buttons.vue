<template>
  <div>
    <Button><span class="min">&#95;</span></Button>
    <Button
      ><span class="max"><span>&#9744;</span></span></Button
    >
    <Button><span>&#10005;</span></Button>
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

span.max {
  font-size: 1.25em;
  font-weight: 800;
}

span.max > * {
  position: relative;
  bottom: 0.054em;
  left: 0.03em;
}
</style>