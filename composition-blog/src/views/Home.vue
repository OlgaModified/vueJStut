<template>
  <div class="home">    
    <p ref="p">Person name is {{name}}, person's age {{ age }}</p>
    <button @click="handleClick">Click Me!</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  setup() {
    //console.log('setup')

    const p = ref(null)
    let name = 'mario'
    let age = '29'

    const handleClick = ()=>{
      console.log(p)
    }
    return {name, age, handleClick, p}
  },
  data() {
    return {
      
    }
  },
  created(){
    //console.log('created')

  },
  mounted(){
    //console.log('mounted')

  }
}
</script>
