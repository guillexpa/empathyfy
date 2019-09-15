<template>
  <div id="content-div">
    <SearchBar v-bind:onSubmit="onSubmit"/>
    <ResultList v-bind:results="results" v-bind:onSelect="onSelect" v-bind:margin="marginOnSelected"/> 
    <Albums 
      v-if="selected" 
      v-bind:width="appearOnSelected" 
      v-bind:selectedAlbums="selectedAlbums"
      v-bind:onClose="onClose"
    />
  </div>
</template>

<script>
import ResultList from './ResultList.vue'
import SearchBar from './SearchBar.vue'
import Albums from './Albums.vue'
import * as SpotifyAPI from '../providers/spotify-api'

export default {
  name: 'Searcher',
  components: {
    ResultList,
    SearchBar,
    Albums,
  },
  props: {
    token: {
        type: String,
        required: false
      }
  },
  data(){
    return {
      results: [],
      selected: false,
      selectedAlbums: [],
    }
  },
  methods: {
    onSubmit: SpotifyAPI.onSubmit,
    onSelect: SpotifyAPI.onSelect,
    onClose() {
      this.selected = false;
      this.selectedAlbums = [];
    }
  },
  computed: {
    appearOnSelected(){
      if(this.selected) {
        return '60%';
      } else {
        return '0%';
      }
    },
    marginOnSelected(){
      if(this.selected) {
        return '100px 0 0 0';
      } else {
        return '200px 0 0 0';
      }
    }
  }
}
</script>

<style scoped>
#content-div {
  display: flex;
  flex-direction: row;
}
</style>