<template>
  <div class="card">
    <h3>{{item.name}}</h3>
    <img :src="item.image" :alt="item.name">
    <p>{{item.description}}</p>
    <div class="card-property">
      <span v-for="part in item.bodyparts" :key="part.index" class="body-part">{{part}}</span>
    </div>
    <span>Expensiveness - {{item.expensiveness}}</span>
    <span>Complexity - {{item.complexity}}</span>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ],

  methods: {
    imagePath: function (imgName) {
      const url = require(`@/assets/img/${imgName}.png`)
      return url
    }
  }
}
</script>

<style lang="scss" scoped>
    .card {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      box-shadow: none;
      border: 1px solid #e0e5ef;
      padding: 20px;
      margin: 10px;
      max-width: 316px;
      border-radius: 6px;
      text-align: left;

      h3, p, span, div {
        margin: 8px 0;
      }

      .body-part {
        padding: 4px;
        display: inline-block;
        margin-right: 8px;
        background: #e5eaf2;
        box-sizing: border-box;
      }

      img {
        height: 240px;
      }
    }
</style>
