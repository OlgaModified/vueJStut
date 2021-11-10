<template>
  <div class="">
    <h1>Job list:</h1>    
    <div v-for="job in jobs" :key="job.id"> 
        <Job :job="job"/>
    </div>
  </div>
</template>

<script>
import Job from '../components/Job.vue'

export default {
    props: ['jobs'],
    components: { Job },
    setup(props){
        console.log(props)
    }
}
</script>
