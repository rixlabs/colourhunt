<template>
  <div class="Content">
    <h1>Create new Palette</h1>
    <hr>
    <input type="text" placeholder="Name your palette" name="title" v-model="title">
    <input type="text" placeholder="Your colors" name="colors" v-model="colors" >

    <button @click="create()">Create Palette</button>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  const createPalette = gql`
    mutation createPalette($title: String!, $colors: [String!]) {
      createPalette(title: $title, colors: $colors) {
        id
        title
        colors
      }
    }
  `
  export default {
    props: {},
    data () {
      return {
        title: '',
        colors: ''
      }
    },
    computed: {
      colorArray () {
        return this.colors.split(',')
      }
    },
    methods: {
      create () {
        const title = this.title
        const colors = this.colorArray

        this.title = ''
        this.colors = ''

        this.$apollo.mutate({
          mutation: createPalette,
          variables: {
            title,
            colors
          },
          updateQueries: {
            allPalettes: (prev, { mutationResult }) => {
              return {
                allPalettes: [mutationResult.data.createPalette, ...prev.allPalettes]
              }
            }
          }
        }).then((data) => {
          console.log(data)
        }).catch((error) => {
          console.error(error)
        })
      }
    }
  }
</script>
