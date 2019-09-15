<template>
    <div id="search-header" v-bind:style="{ height: computedHeight }">
      <h1>mpthYFY</h1>
      <form v-on:submit.prevent="onSubmit(search);">
        <input 
          type="text" 
          v-model="search" 
          v-on:focus="changeHeaderOnFocus()" 
          v-on:blur="clearInput(); changeHeaderOnBlur()"
        />
        <i class="material-icons" >search</i>
      </form>
      <!-- <select v-if="this.showSelect" name="" id=""></select> -->
    </div>
</template>

<script>
import ResultList from './ResultList.vue'

export default {
  name: 'SearchBar',
  components: {
    ResultList,
  },
  props: {
    onSubmit: {
        type: Function,
        required: true
      }
  },
  data(){
    return {
      search: '',
      height: '100px',
      showSelect: false,
    }
  },
  computed: {
    computedHeight: function () {
      return this.height;
    }
  },
  methods: {
    changeHeaderOnFocus() {
      this.height = '200px';
      this.showSelect = true;
    },
    changeHeaderOnBlur() {
      if(!this.search){
        this.height = '100px';
        this.showSelect = false;
      }
    },
    clearInput(){
        this.search = '';
    }
  }
}
</script>

<style scoped>
.material-icons {
  margin: 10px 0 0 5px;
  font-size: 30px;
  color: darkgreen;
}
#search-header {
  position:fixed; 
  left:0;          
  top:0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width:100%;     
  z-index:200;
  background-color: mediumseagreen;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
}
h1 {
  padding: 0 10px 0 20px;
  font-size: 40px;
}
select {
  width: 15%;
  font-size: 40px;
  margin: 10px 0 0 5px;
}
select:focus{
  outline: none;
}
input[type=text] {
  width: 50%;
  font-size: 40px;
  padding: 0 0 5px 5px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  border-bottom: 1px solid mediumseagreen;
  -webkit-transition: width 0.2s ease-in-out;
  transition: width 0.2s ease-in-out;
}
input[type=text]:focus {
  outline: none;
  width: 80%;
  border: none; 
  border-bottom: 2px solid forestgreen; 
}
</style>