import { ref } from '@vue/reactivity'

const getPosts = ()=> {

    const posts = ref([])
    const error = ref(null)
    
    const load = async () => {
      try {

        let data = await fetch('http://172.20.107.208:3000/posts')
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

    //console.log(posts)

    return  { posts, error, load }
}  

export default getPosts
    