import { ref } from '@vue/reactivity'

const getPost = (id)=> {

    const post = ref(null)
    const error = ref(null)
    
    const loadPost = async () => {
      try {

        let data = await fetch('http://172.20.107.208:3000/posts/' + id)
        //console.log(data)
        if(!data.ok){
          throw Error('we couldn not find your post')
        }
        post.value = await data.json()

      } 
      catch (err) 
      {
        error.value = err.message
        console.log(error.value)
      }
    } 

    //console.log(posts)

    return  { post, error, loadPost }
}  

export default getPost