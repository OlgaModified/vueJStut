<template>
  <div class="">
    <h1>Post list:</h1>  
    <div v-if='posts.length'>
      <div v-for="post in posts" :key="post">         
        <Post :post="post"/>
      </div>    
    </div>     
  </div>
</template>

<script>
import Post from '../components/Post.vue'
export default {
      props: ['posts'],
      components: { Post },
     /* data() {
       return {
         posts: []
       }
     },
     mounted() {
       fetch('http://172.19.235.5:3000/posts')
       .then((res) => res.json())
       .then((data) => this.posts = data)
       .catch(err => console.log(err.message))
     } */
}
</script>

<style scoped>

p {
    text-align: left;
    width: 500px;
    margin: auto;
}

.job {
    border: 5px double rgb(87, 50, 24);
    margin-bottom: 5px;
    padding: 5px;
}

</style>