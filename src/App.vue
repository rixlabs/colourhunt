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

<style lang="scss">
  @import "./assets/styles/_variables.scss";

  .button {
    font-size: rem(12);
    text-transform: uppercase;
    font-weight: bold;
    color: color(text-color);
    border: 1px solid color(border-color);
    padding: rem(10) rem(15);
    background: color(background-light);
    border-radius: $base-border-radius;
    appearance: none;
    cursor: pointer;

    @include hover-active-states() {
      background: color(background-base);
    }

    &.is-active {
      background: color(background-base);
    }

    @include variant(small) {
      padding: rem(5) rem(10);
    }
  }

</style>
