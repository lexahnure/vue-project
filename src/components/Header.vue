<template>
  <nav class="menu">
    <div class="menu-container">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo.png" alt="logo">
        </a>
      </div>
      <span>{{title}}</span>
      <ul class="menu-links">
        <li v-for="item in menuItems" :key="item">
          <router-link :to="`/${item.toLowerCase()}`">{{item}}</router-link>
        </li>
      </ul>
      <ul class="auth-links">
        <li>
          <router-link :to="`/login`">Login</router-link>
        </li>
        <li>
          <router-link :to="`/register`">Register</router-link>
        </li>
        <li>
          <input type="button" @click="logout" value="Logout"/>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { bus } from '../main'
import firebase from 'firebase'

export default {
  name: 'navbar',
  props: [
    'menuItems',
    'menuAuth',
    'title'
  ],
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created () {
    bus.$on('titleChange', (data) => {
      this.title = data
    })
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    width: 100%;
    border-bottom: 2px solid #e2e7eb;
    padding: 8px 0;

    .menu-container {
      display: flex;
      margin: 0 auto;
      max-width: 1170px;
      display: flex;
      justify-content: space-between;
    }

    .logo {
      img {
        height: 48px;
      }
    }

    .menu-links, .auth-links {
      margin: 0 auto;
      padding: 0;
      display: flex;
      align-items: center;

      li {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 24px;
        }
      }
    }
    .auth-links {
      margin: 0;
    }
  }

</style>
