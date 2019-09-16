<template>
  <div class="container">
    <h1>Exercises</h1>
    <h2>{{title}}</h2>
    <slot name="title"></slot>
    <div class="filters">
      <button @click="changeTitle">Change</button>
    </div>
    <slot name="text"></slot>
    <ul class="cards-list">
      <li v-for="item in items" :key="item.name" >
        <Exercise :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import Exercise from './Exercise'
import { bus } from '../main'
import db from './firebaseInit'

export default {
  components: {
    Exercise
  },

  data () {
    return {
      items: [],
    }
  },

  props: [
    'title'
  ],

  created () {
    db.collection('exercises').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        const data = {
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          bodyparts: doc.data().bodyparts,
          expensiveness: doc.data().expensiveness,
          complexity: doc.data().complexity,
          image: doc.data().image
        }
        this.items.push(data)
      })
      console.log(this.items)
    })
  },

  methods: {
    imagePath: function (imgName) {
      const url = require(`@/assets/img/${imgName}.png`)
      return url
    },

    changeTitle: function () {
      // this.$emit('changeTitle', 'Oh yeah!')
      this.title = 'Oh Blet!'
      bus.$emit('titleChange', 'Oh Blet!')
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 1170px;
    margin: 0 auto;
  }

  .cards-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px;
  }
</style>
