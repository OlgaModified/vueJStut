<template>
  <div v-if="job">
    <h2>Description</h2>
    <h2> {{ job.title }}</h2>
    <p>The job id is {{ id }}</p>
    <p>Details: {{ job.details }}</p>
  </div>
  <div v-else>    
    <p>Loading job details...</p>
    <p>Coding Bugs were NOT named after an actual bug.</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      job: null
    }
  },
  mounted() {
      fetch ( 'http://172.19.235.5:3000/jobs/' + this.id)
      .then((res)=> res.json() )
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }
 

}
</script>

<style>

</style>