<template>
  <div id="app">
  <NavBar />
  <router-view></router-view>
  <FooTer />
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooTer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
