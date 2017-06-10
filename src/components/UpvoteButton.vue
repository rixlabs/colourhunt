<template>
  <div class="Color-palette__upvotes button button--small" :class="{'is-active': voted}" @click="upvote()">
    {{ upvotes }}
  </div>
</template>

<script>
  export default {
    props: {
      upvotes: {
        type: Number,
        default: 0
      },
      id: {
        type: String
      }
    },
    data () {
      return {
        voted: false
      }
    },
    methods: {
      upvote () {
        this.voted = true
      }
    }
  }
</script>
