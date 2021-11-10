<template>
  <div class="">
    <h1>Job list:</h1>    
    <div v-for="job in jobs" :key="job.id"> 
        <Job :job="job"/>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import Job from '../components/Job.vue'

export default {
    props: ['jobs'],
    components: { Job },
    setup(props){
        //console.log(props)
        onMounted(() => console.log('mounted'))
        onUnmounted(() => console.log('unmounted'))
        onUpdated(() => console.log('updated'))
    },
    mounted(){
      console.log('mounted using options api')
    }
}
</script>
