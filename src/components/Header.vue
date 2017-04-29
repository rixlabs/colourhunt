<template>
  <header class="Header">
    <div class="Header__content">
      <router-link to="/">
        <h1 class="Header__logo">Colour Hunt</h1>
      </router-link>
      <router-link to="create">Create</router-link>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .Header {
    background-color: color(background-light);
    border-bottom: 1px solid color(border-color);
    height: rem(70);

    @include has(content) {
      @include container();
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }

    @include has(logo) {
      color: color(highlight);
      font-size: rem(18);
    }
  }
</style>
