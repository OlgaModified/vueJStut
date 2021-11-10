<template>
  <div class="home">
    <h1>Refs</h1>    
    <p > Our vilain for today is:  {{ heroOne.name }}. Our vilain is born {{ heroOne.age }} years ago</p>
    <button @click="updateHero">Update Hero</button>
     <h1>Reactive - primitive can't be updated</h1>    
    <p > Our hero for today is:  {{ heroTwo.name }}. Our hero is born {{ heroTwo.age }} years ago</p>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  setup() {
    //console.log('setup')
    const heroOne = ref({name: 'Dracula', age: 150})
    const heroTwo = reactive({name: 'Ironman', age: 25})
    const jobs = ref([
        {title: "Web Developer", id: 1, body: "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server ..."},
        {title: "Software Developer", id: 1, body: "Agile software development services for ambitious organizations. Flexible partnership. We implement robust processes in software development that result in reliable solutions. 16+ years of experience. Excellent tech know-how. We offer peace of mind."}
        ])

    const updateHero = ()=>{
     // console.log(p, p.value)
     // p.value.classList.add('test')
      //p.value.textContent = "Hejsa!"
      heroOne.value.age += 500
      heroTwo.age +=10
      
    }
     
    return {jobs, updateHero, heroOne, heroTwo }
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
