<template>
  <div class="container">
    <h1>Exercises</h1>
    <h2>{{title}}</h2>
    <div class="filters">
      <button @click="changeTitle">Change</button>
    </div>
    <ul class="cards-list">
      <li v-for="item in items" :key="item.name" >
          <div class="card">
            <p>{{item.name}}</p>
            <img :src="imagePath(item.picture)" :alt="item.name">
            <p>{{item.description}}</p>
            <div class="body-parts">
              <span v-for="part in item.bodyParts" :key="part.index">{{part}}</span>
            </div>
            <span>{{item.expensiveness}}</span>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Squats',
          picture: 'asd',
          description: 'Engineered for iPhone XS, the Smart Battery Case gives you even longer battery life while offering great protection. Inside, a soft microfiber lining helps protect your iPhone.',
          bodyParts: ['quads', 'hamstrings', 'calves'],
          expensiveness: 2
        },
        {
          name: 'Lift',
          picture: 'abd',
          description: 'Engineered for iPhone XS, the Smart Battery Case gives you even longer battery life while offering great protection. Inside, a soft microfiber lining helps protect your iPhone.',
          bodyParts: ['latissimus', 'hamstrings', 'rectus'],
          expensiveness: 2
        },
        {
          name: 'Bench',
          picture: 'abc',
          description: 'Engineered for iPhone XS, the Smart Battery Case gives you even longer battery life while offering great protection. Inside, a soft microfiber lining helps protect your iPhone.',
          bodyParts: ['front delt', 'breast', 'triceps'],
          expensiveness: 1.5
        },
        {
          name: 'Biceps lift',
          picture: 'abc',
          description: 'Engineered for iPhone XS, the Smart Battery Case gives you even longer battery life while offering great protection. Inside, a soft microfiber lining helps protect your iPhone.',
          bodyParts: ['biceps', 'forearms', 'brachialis'],
          expensiveness: 1
        }
      ]
    }
  },
  props: [
    'title'
  ],
  methods: {
    imagePath: function (imgName) {
      const url = require(`@/assets/img/${imgName}.png`)
      return url
    },
    changeTitle: function () {
      this.$emit('changeTitle', 'Oh yeah!')
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

    .card {
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 8px rgba(0,0,0,.12);
      padding: 20px;
      margin: 10px;
      max-width: 316px;
      border-radius: 6px;

      img {
        height: 240px;
      }
    }
  }
</style>
