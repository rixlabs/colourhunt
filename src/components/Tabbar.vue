<template>
  <div class="Tabbar">
    <div class="Tabbar__header">
      <ul class="Tabbar__list">
        <li class="Tabbar__item">Sass</li>
        <li class="Tabbar__item">Less</li>
        <li class="Tabbar__item">PostCSS</li>
      </ul>
    </div>
    <div class="Tabbar__content">
      <div class="Tabbar__content-item">
        <ul class="code-editor">
          <li v-for="(color, index) in colors">
            $color{{index}}: '{{ color }}';
          </li>
        </ul>
      </div>

      <div class="Tabbar__content-item">
        <ul class="code-editor">
          <li v-for="(color, index) in colors">
            @color{{index}}: '{{ color }}';
          </li>
        </ul>
      </div>

      <div class="Tabbar__content-item">
        <ul class="code-editor">
        :root {
          <li v-for="(color, index) in colors">
            --color{{index}}: {{ color }};
          </li>
          }
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      colors: {
        type: Array
      }
    },
    data () {
      return {
        active: false
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .Tabbar {
    background: color(background-light);
    border-radius: $base-border-radius;
    // border: 1px solid color(border-color);
    padding: rem(20);
    margin: rem(20) 0;
    @include has(header) {
      border-bottom: 1px solid color(border-color);
      margin-bottom: rem(10);
    }

    @include has(list) {
      @include unstyled-list();
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    @include has(item) {
      flex: 0 0 150px;
      position: relative;
      padding-bottom: rem(5);
      text-align: center;
      font-size: rem(14);
      font-weight: 600;
      cursor: pointer;

      &:hover, &:focus, &:active, &.is-active {
        color: darken(color(text-color), 10%);
        &:after {
          content: '';
          height: 1px;
          width: 100%;
          background: color(highlight);
          position: absolute;
          bottom: 0px;
          left: 0;
        }
      }
    }
  }

  .code-editor {
    @include unstyled-list();
    padding: rem(20);
    background: color(background-base);
    color: color(text-color);
  }
</style>
