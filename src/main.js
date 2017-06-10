import Vue from 'vue'
import App from './App'
import router from './router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/xxxxxxxxxxx' })

const apolloClient = new ApolloClient({
  networkInterface
})

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  apolloProvider,
  render: h => h(App)
})
