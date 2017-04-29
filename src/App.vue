<template>
  <div id="app">
    <c-header></c-header>
    <router-view></router-view>
  </div>
</template>

<script>
import CHeader from './components/Header'
export default {
  components: { CHeader },
  name: 'app'
}
</script>

<style>

</style>
