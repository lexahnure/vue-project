<template>
  <div class="container">
    <ul class="card-list">
      <li v-for="item in items" :key="item.name" >
          <div class="card">
            <p>{{item.name}}</p>
            <img :src="`../assets/${item.picture}.jpg`" :alt="item.name">
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
          picture: 'asd7687dfaj',
          description: 'Engineered for iPhone XS, the Smart Battery Case gives you even longer battery life while offering great protection. Inside, a soft microfiber lining helps protect your iPhone. And on the outside, the silky, soft-touch finish of the silicone exterior feels great in your hand.'
        },
        {
          name: 'Lift',
          picture: 'asd7687dfaj',
          description: 'Engineered for iPhone XS, the Smart Battery Case gives you even longer battery life while offering great protection. Inside, a soft microfiber lining helps protect your iPhone. And on the outside, the silky, soft-touch finish of the silicone exterior feels great in your hand.'
        },
        {
          name: 'Bench',
          picture: 'asd7687dfaj',
          description: 'Engineered for iPhone XS, the Smart Battery Case gives you even longer battery life while offering great protection. Inside, a soft microfiber lining helps protect your iPhone. And on the outside, the silky, soft-touch finish of the silicone exterior feels great in your hand.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
