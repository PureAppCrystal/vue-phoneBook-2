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
    let path = this.$route.path

    switch (path) {
      case '/':
      case '/list':
        return this.formState = 'list';
        break;
      case '/select':
        return this.formState = 'select';
        break;
      case '/insert':
        return this.formState = 'insert';
        break;
      case '/update':
        return this.formState = 'update';
        break;
      default:
        return this.formState = 'list'
    }
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
