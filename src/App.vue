<template>
  <div id="app">
    <Header :menuItems="menuItems" :menuAuth="menuAuth" />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      title: 'Your first Vue file, wooo!',
      menuItems: ['Trainings', 'Exercises', 'Profile', 'Logout']
    }
  },
  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle
    }
  },
  computed: {
    menuAuth: function () {
      return ['Login', 'Register']
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>
