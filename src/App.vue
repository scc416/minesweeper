<template>
  <div class="cover">
    <div class="game">
      <TitleBar />
      <Menu />
      <Board />
    </div>
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar/TitleBar.vue";
import Menu from "./components/Menu/Menu.vue";
import Board from "./components/Board/Board.vue";

export default {
  components: { TitleBar, Menu, Board },
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

body,
.cover {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.game {
  background: #bdbdbd;
  border-top: #eeeeee solid 0.22em;
  border-left: #eeeeee solid 0.22em;
  border-right: #9f9f9f solid 0.22em;
  border-bottom: #9f9f9f solid 0.22em;
}

* {
  box-sizing: border-box;
}
</style>
