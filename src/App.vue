<template>
  <div id="app">
    <Searcher v-bind:token="token" />
  </div>
</template>

<script>
import Searcher from './components/Searcher.vue'
import ResultList from './components/ResultList.vue'

export default {
  name: 'app',
  components: {
    Searcher,
    ResultList
  },
  data(){
    return {
      results: [],
      token: ''
    }
  },
  created(){
    let hasToken = window.location.href.split('/#access_token=')[1]
    this.token = hasToken && hasToken.split('&')[0] || '';
    if(this.token === ''){
      window.location.href = 'https://accounts.spotify.com/authorize?client_id=a69257f142c64a2ebfebfe9a14b2ba1d&redirect_uri=http://localhost:8080/&response_type=token';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
