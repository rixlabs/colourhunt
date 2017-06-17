<template>
  <div class="Content">
    <div class="Color-create">
      <h1>Create new Palette</h1>
      <hr>
      <input type="text" placeholder="Name your palette" name="title" v-model="title">
      <div class="Color__list">
        <swatch
          v-for="(swatch, index) in swatches"
          v-on:remove="removeColor(index)"
          v-on:picker="openPicker(index)"
          :color="swatch.color" />

        <add-swatch v-if="addable" v-on:increment="addColor()"/>
        <chrome-picker v-if="showPicker" v-model="pickerColors" v-on-clickaway="closePicker" />
      </div>
      <button class="button" @click="create()">Create Palette</button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { Chrome as ChromePicker } from 'vue-color'
import { mixin as clickaway } from 'vue-clickaway'
import Swatch from './Swatch/ColorSwatch'
import AddSwatch from './Swatch/AddSwatch'

let defaultProps = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
}

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
  mixins: [clickaway],
  components: { Swatch, AddSwatch, ChromePicker },
  data () {
    return {
      title: '',
      currentIndex: 0,
      colorCount: 4,
      showPicker: false,
      pickerColors: defaultProps,
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
  watch: {
    'pickerColors': function (val) {
      this.swatches[this.currentIndex].color = val.hex
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
      this.swatches.push({color: '#f1f1f1'})
    },
    removeColor (index) {
      this.swatches.splice(index, 1)
    },
    openPicker (index) {
      this.currentIndex = index
      this.showPicker = true
    },
    closePicker () {
      this.showPicker = false
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
