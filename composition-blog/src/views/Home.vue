<template>
  <div class="home">
    <h1>Wellcome adventurer!</h1>
    <JobList v-if="showJobs" :jobs="jobs"/>
    <button @click="showJobs = !showJobs">Show Jobs</button>
    <button @click="jobs.pop()">delete a job</button>

    <h1>Wellcome adventurer!</h1>
    <div v-if="error"> 
      {{ error }}
    </div>
    
    <div v-if="posts.length">
      <PostList  :posts = "posts" />
    </div>
    
    <div v-else>
      Loading...
    </div>

  </div>
</template>

<script>
import JobList from '../components/JobList.vue'
import PostList from '../components/PostList'
import { computed, ref } from '@vue/reactivity'

export default {
  name: 'Home',
  components: { JobList , PostList},
  setup() {
    //console.log('setup')
    const jobs = ref([
        {title: "Web Developer", id: 1, body: "A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server ..."},
        {title: "Software Developer", id: 2, body: "Agile software development services for ambitious organizations. Flexible partnership. We implement robust processes in software development that result in reliable solutions. 16+ years of experience. Excellent tech know-how. We offer peace of mind."}
        ])
     
    const showJobs = ref(true)
    const showPosts = ref(true) 
    const posts = ref([])
    const error = ref(null)
    
    const load = async () => {
      try {

        let data = await fetch('http://172.19.235.5:3000/posts')
        //console.log(data)
        if(!data.ok){
          throw Error('no data avalaible')
        }

        posts.value = await data.json()

      } 
      catch (err) 
      {
        error.value = err.message
        console.log(error.value)
      }
    }

    load()
    
    return {jobs, showJobs, showPosts, error, posts}
  }
}
</script>
