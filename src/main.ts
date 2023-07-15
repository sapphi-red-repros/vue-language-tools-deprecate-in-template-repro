import { createApp } from 'vue'
import App from './App.vue'
import foo from './foo.svg'

console.log(foo)

createApp(App).mount('#app')

/** @deprecated */
const bar = 0
console.log(bar)
