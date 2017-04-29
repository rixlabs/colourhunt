import Vue from 'vue'
import Router from 'vue-router'
import GridView from '@/components/GridView'
import CreatePalette from '@/components/CreatePalette'
import ColorPaletteDetail from '@/components/ColorPaletteDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: GridView
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePalette
    }, {
      path: '/palette/:id',
      name: 'palette',
      component: ColorPaletteDetail
    }
  ]
})
