<template>
  <h1>List of the jobs</h1>
  <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id">
          <router-link :to="{name: 'JobDetails', params: {id: job.id }}">
              <h2> {{ job.title }}</h2>
          </router-link>          
      </div>
  </div>
  <div v-else>    
    <p>Loading job details...</p>
    <p>The first programmer was the daughter of a mad poet.</p>
  </div>      
</template>

<script>
export default {

    data() {
        return {
            jobs: [
                
            ]
        }
    },
    mounted() {
        fetch ( 'http://172.19.235.5:3000/jobs')
        .then((res)=> res.json() )
        .then(data => this.jobs = data)
        .catch(err => console.log(err.message))
    }


}
</script>

<style>
h2 {
     width: 75%;
    background-color: #9b79a5;
    text-decoration: none;
    color: white;
    padding: 14px 20px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}
</style>