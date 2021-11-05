<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link> |   
    <router-link :to="{ name: 'About'}">About</router-link>        
  </div>

  <button @click="redirect">Home</button>
  <button  @click="back">Go back</button>
  <button  @click="forward">forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect(){
      this.$router.push({ name: 'Home'})
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  background-color: #4CAF50; /* Green */
  border: none;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  margin: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
