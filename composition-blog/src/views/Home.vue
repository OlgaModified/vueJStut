<template>
  <div class="home">
    <h1>Post about jobs</h1>    
    <p ref="p"> Name:  {{ name }} and my age is {{ age }}</p>
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
    let name= "Mario"
    let age = 30
    const jobs = ref([
        {title: "Web Developer", id: 1, body: "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server ..."},
        {title: "Software Developer", id: 1, body: "Agile software development services for ambitious organizations. Flexible partnership. We implement robust processes in software development that result in reliable solutions. 16+ years of experience. Excellent tech know-how. We offer peace of mind."}
        ])

    const handleClick = ()=>{
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = "Hejsa!"
    }
     
    return {jobs, handleClick, p, name, age }
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
