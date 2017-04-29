<template>
  <div class="Content">
    <div class="Content__list">
      <template v-if="loading > 0">
        Loading...
      </template>
      <template v-else>
        <color-palette v-for="palette in allPalettes" :key="palette.id" :colorpalette='palette'/>
      </template>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import ColorPalette from './ColorPalette'

  // GraphQL query
  const FeedQuery = gql`
    query allPalettes {
      allPalettes(orderBy: createdAt_DESC) {
        id
        title
        upvotes
        colors
      }
    }
  `
  export default {
    components: { ColorPalette },
    props: {},
    data () {
      return {
        allPalettes: {},
        loading: 0
      }
    },
    apollo: {
      allPalettes: {
        query: FeedQuery,
        loadingKey: 'loading'
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/_variables.scss";

  .Content {
    @include container();

    @include has(list) {
      margin: rem(50) rem(-10);
      display: flex;
      flex-flow: row wrap;
    }
  }
</style>
