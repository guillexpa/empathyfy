<template>
  <div id="results-list" v-bind:style="{ margin: margin }">
    <ul>
      <li 
        v-for="result in results" 
        v-bind:key="result.id" 
        v-on:click="onSelect(result)"
      >
        <div class="left">
          <img v-bind:src="result.pic || 'https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/HSGhPzFhfjg9t2cv6/storyblocks-music-icon-vector-melody-song-note-sound-audio-sign-isolated-on-white-background-trendy-flat-style-for-graphic-design_B3gvjcgF6f_thumb.jpg'" v-bind:alt="results.name" />
        </div>
        <div class="right">
          {{result.name}}
          <div class="type-badge">
            {{result.type}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ResultList',
    props: {
      results: {
        type: Array,
        required: false
      },
      onSelect: {
        type: Function,
        required: true,
      },
      margin: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
#results-list {
  margin-top: 200px;
  width: 100%;
}
.right {
  margin: 10px 0 0 10px;
  width: 80%;
}
.type-badge {
  background-color: salmon;
  text-align: center;
  color: whitesmoke;
  width: 60px;
  border-radius: 10px;
  margin: 5px 0 5px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0 10px 0;
  border-bottom: 1px solid grey;
  text-align: justify;
  text-justify: inter-word;
  display: flex;
  flex-direction: 'row';
}
img {
  width: 80px;
}
</style>