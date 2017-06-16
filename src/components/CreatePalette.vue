<template>
  <div class="Content">
    <div class="Color-create">
      <h1>Create new Palette</h1>
      <hr>
      <input type="text" placeholder="Name your palette" name="title" v-model="title">
      <input type="text" placeholder="Your colors" name="colors" v-model="colors" >
      <div class="Color__list">
        <swatch v-for="swatch in swatches" v-on:remove="removeColor" :color="swatch.color"></swatch>
        <add-swatch v-if="addable" v-on:increment="addColor()"/>
      </div>

      <button class="create" @click="create()">Create Palette</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import Swatch from './Swatch/ColorSwatch'
import AddSwatch from './Swatch/AddSwatch'

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
  components: { Swatch, AddSwatch },
  data () {
    return {
      title: '',
      colorCount: 4,
      swatches: [{
        color: '#f1f1f1'
      }]
    }
  },
  computed: {
    colorArray () {
      return this.colors
    },
    colors () {
      return this.swatches.map(color => color.color)
    },
    addable () {
      return (this.swatches.length <= this.colorCount)
    }
  },
  methods: {
    create () {
      const title = this.title
      const colors = this.colorArray

      this.title = ''
      this.colors = ''

      this.$apollo
        .mutate({
          mutation: createPalette,
          variables: {
            title,
            colors
          },
          updateQueries: {
            allPalettes: (prev, { mutationResult }) => {
              return {
                allPalettes: [
                  mutationResult.data.createPalette,
                  ...prev.allPalettes
                ]
              }
            }
          }
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    },
    addColor () {
      this.swatches.push({color: '#000'})
    },
    removeColor (index) {
      this.swatches.splice(index, 1)
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

  .Color__list {
    display: flex;
    flex-flow: row wrap;
    margin: 0 rem(-20);
    > * {
      margin: rem(20);
    }
  }

</style>
