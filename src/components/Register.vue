<template>
  <div class="form-container">
    <h3>Register</h3>
    <form>
      <div class="input-field">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" required>
      </div>
      <div class="input-field">
        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" required>
      </div>
      <input class="btn" type="button" @click="register" value="Register">
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register: function (e) {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(usr => console.log(usr.user.email))
        .catch(err => console.log(`Error - ${err.errorMessage}`))
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss">
  .form-container {
    width: 320px;
    padding: 24px;
    margin: 0 auto;
  }
  .input-field {
    text-align: left;
    label, input {
      display: block;
      margin: auto;
      width: 100%;
    }
  }
</style>
