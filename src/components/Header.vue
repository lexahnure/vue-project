<template>
  <nav class="menu">
    <div class="menu-container">
      <div class="logo">
        <a href="/">
          <img src="../assets/logo.png" alt="logo">
        </a>
      </div>
      <ul class="menu-links">
        <li v-for="item in itemsAuth" :key="item">
          <a href="/">{{item}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      itemsAuth: ['Trainings', 'Exercices', 'Profile', 'Logout'],
      itemsNotAuth: ['Login', 'Register']
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
    }

    .logo {
      img {
        height: 48px;
      }
    }

    .menu-links {
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
  }

</style>
