<template>
  <div>
    <h1>Trainings - {{word}}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: this.$store.state.word
    }
  }
}
</script>
