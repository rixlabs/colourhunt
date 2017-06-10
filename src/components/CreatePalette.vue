<template>
  <div class="Content">
    <div class="Color-create">
      <h1>Create new Palette</h1>
      <hr>
      <input type="text" placeholder="Name your palette" name="title" v-model="title">
      <input type="text" placeholder="Your colors" name="colors" v-model="colors" >
      <color-picker></color-picker>
      <button @click="create()">Create Palette</button>
    </div>
  </div>
</template>

<script>
  import colorPicker from 'vue-sketch-color-picker'
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
    components: { colorPicker },
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

<style lang="scss" scoped>
  @import "../assets/styles/_variables.scss";

  .Color-create {
    background: color(background-light);
    border-radius: $base-border-radius;
    border: 1px solid color(border-color);
    margin: rem(10);
    margin-top: rem(50);
    padding: rem(30);
  }

  input[type="text"] {
    padding: rem(20);
    background-color: #fff;
    border: 1px solid color(border-color);
    font-size: rem(16);
    flex: 1;
  }

</style>
