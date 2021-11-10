<template>
  <div class="home">
    <h1>Computed values</h1>    
    <input type="text" v-model="search" />
    <p>Search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name"> Our man for today is:  {{ name }}.</div>
    <button @click="handleClick">Stop watch</button>
     
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { watch, watchEffect } from '@vue/runtime-core'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  setup() {
    //console.log('setup')  
    const search = ref('')  
    const names = ref(['ironman', 'dracula', 'hulk', 'mario', 'marion', 'peach'])

    const stopWatch = watch(search, ()=>{
      console.log('big brother watching you')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect watching you', search.value)
    })

    const matchingNames = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value))
    })

    const handleClick = ()=>{
      stopWatch()
      stopEffect()
    }
     
    return {names, search, matchingNames, handleClick}
  }
  
}
</script>
