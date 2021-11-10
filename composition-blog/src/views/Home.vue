<template>
  <div class="home">
    <JobList :jobs="jobs"/>
  </div>
</template>

<script>
import JobList from '../components/JobList.vue'
import { computed, ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: { JobList },
  setup() {
    //console.log('setup')
    const jobs = ref([
        {title: "Web Developer", id: 1, body: "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server ..."},
        {title: "Software Developer", id: 2, body: "Agile software development services for ambitious organizations. Flexible partnership. We implement robust processes in software development that result in reliable solutions. 16+ years of experience. Excellent tech know-how. We offer peace of mind."}
        ])
     
    return {jobs}
  }
}
</script>
