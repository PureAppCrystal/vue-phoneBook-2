<template>
  <div id="app">
      <Header
        v-bind:formState="formState"
      />
      <Search/>
      <PhoneList/>
      <button @click='getCurrentUrl'> current Url </button>
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import PhoneList from './components/PhoneList'

export default {
  name: 'app',
  data() {
    return {
      formState: 'list'
    }
  },
  methods: {
    getCurrentUrl: function() {
      console.log("current url : ", this.$route.path);
    }
  },
  created() {
    console.log("====== app created ======")
    console.log("current url : ", this.$route.path);
    let path = this.$route.path
    path = path.substring(1, path.length)
    console.log("path : ", path)
  },
  components: {
    Header,
    Search,
    PhoneList,
  }
}
</script>

<style>
html {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
}

body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  height: 100%;
  width: 100%;
}


</style>
