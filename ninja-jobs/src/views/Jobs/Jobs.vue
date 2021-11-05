<template>
  <h1>List of the jobs</h1>
      <div v-for="job in jobs" :key="job.id">
          <router-link :to="{name: 'JobDetails', params: {id: job.id }}">
              <h2> {{ job.title }}</h2>
          </router-link>
          
      </div>
</template>

<script>
export default {

    data() {
        return {
            jobs: [
                {title: 'Web Developer', id: 1, details: 'Web development'},
                {title: 'Back-end Developer', id: 2, details: 'Development of the back side of the applications'},
                {title: 'Front-end Developer', id: 3, details: 'Development of the front-end of the web-application with Vue'},
                {title: 'Mobile App Developer', id: 4, details: 'Xamarin, iOS Mobile Development'},
            ]
        }
    }


}
</script>

<style>
h2 {
     width: 100%;
    background-color: #9b79a5;
    text-decoration: none;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}
</style>