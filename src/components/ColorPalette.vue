<template>
  <div class="Color-palette">
    <router-link :to="{ name: 'palette', params: { id: colorpalette.id }}" class="Color__link">
      <div class="Color-palette__colors">
        <color-preview :colors="colorpalette.colors" />
      </div>
      <div class="Color-palette__content">
        <div class="Color-palette__title">
          {{ colorpalette.title }}
        </div>
      </div>
    </router-link>
    <div class="Color-palette__meta">
      <upvote-button :id="colorpalette.id" :upvotes="colorpalette.upvotes"></upvote-button>
    </div>
  </div>
</template>

<script>
  import ColorPreview from './ColorPreview'
  import UpvoteButton from './UpvoteButton'

  export default {
    components: { ColorPreview, UpvoteButton },
    props: {
      colorpalette: {
        type: Object,
        default: function () {
          return { title: '', colors: [], upvotes: 0 }
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .Color-palette {
    display: flex;
    flex-direction: column;
    background: color(background-light);
    border-radius: $base-border-radius;
    border: 1px solid color(border-color);
    margin: rem(10);
    flex: 1 1 100%;
    cursor: pointer;
    position: relative;

    @include hover-active-states() {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .15);
    }

    @include media($sm-up) {
      flex: 0 1 calc(25% - 22px);
    }

    @include has(colors) {
      color: color(text-color);
    }

    @include has(content) {
      padding: rem(20);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    @include has(title) {
      font-size: rem(11);
      font-weight: 600;
      color: color(text-color);
    }

    @include has(meta) {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: rem(15);
    }

    @include has(upvotes) {
    }
  }

</style>
