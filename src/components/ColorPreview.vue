<template>
  <div class="Colorpreview" :style="{height: height + 'px'}">
    <span class="Color" v-for="color in colors" v-bind:style="{backgroundColor: color}">
      <span class="hex">
        {{ color }}
      </span>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      colors: {
        type: Array
      },
      height: {
        type: Number,
        default: 50
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .Colorpreview {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
  }

  .hex {
    opacity: 0;
    padding: rem(5);
    font-size: rem(13);
    background: rgba(0, 0, 0, .2);
    color: color(background-light);
    transform: translateY(20px);
    width: 0;
    // transition: transform .3s ease-in-out, width .4s linear;
  }

  .Color {
    flex: 1;
    display: flex;
    align-items: flex-end;
    transition: all .2s ease-in;

    &:hover {
      flex: 3;

      .hex {
        opacity: 1;
        transform: translateY(0px);
        width: inherit;
        transition: transform .1s ease-in-out, opacity .2s ease-in;
      }
    }

  }
</style>
