<template>
  <TitleBar />
</template>

<script>
import TitleBar from "./components/TitleBar/TitleBar.vue";
export default {
  components: { TitleBar },
};
</script>

<style>
html {
  background: url("./assets/background.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  padding: 0;
  font-family: "Open Sans";
  user-select: none;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  background: #eeeeee;
  padding: 0.22em;
}

* {
  box-sizing: border-box;
}
</style>
