<template>
  <span>
    <div>
      {{ timeFormatter(number) }}
    </div>
  </span>
</template>

<script>
import { timeFormatter } from "../../../helpers";

export default { props: ["number"], methods: { timeFormatter } };
</script>

<style scoped>
span {
  background: #000000;
  color: #eb0000;
  height: 0.68em;
  border-right: #e1dcdc solid 0.05em;
  border-bottom: #e1dcdc solid 0.05em;
}

span > * {
  bottom: 0.19em;
  position: relative;
}
</style>