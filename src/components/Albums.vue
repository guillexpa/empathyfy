<template>
  <div id="album-detail" v-bind:style="{ width }">
    <i class="material-icons" @click="onClose" >close</i>
    <h1>{{selectedAlbums[0].artist}} albums</h1>
    <ul>
      <li v-for="album in selectedAlbums" v-bind:key="album.id" >
        <p class="name">{{album.name}}</p>
        <p><strong>{{album.release_date.split('-')[0]}}</strong></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Albums',
  props: {
    width: {
      type: String,
      required: false
    },
    selectedAlbums: {
      type: Array,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
}
</script>

<style scoped>
#album-detail {
  margin: 100px 0 0 20px;
  -webkit-transition: width 0.2s ease-in-out;
  transition: width 0.2s ease-in-out;
  border: 1 solid grey;
  text-align: justify;
  text-justify: inter-word;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0 10px 0;
  text-align: justify;
  text-justify: inter-word;
  display: flex;
  flex-direction: 'row';
}
.name {
  width: 50%;
  margin-right: 20px;
}
.material-icons {
  float: right;
}
</style>