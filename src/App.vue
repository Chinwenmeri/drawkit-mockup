<template>
  <SignUp />
</template>

<script>
import SignUp from "./components/sign_up.vue";
export default {
  name: "App",
  components: {
    SignUp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
