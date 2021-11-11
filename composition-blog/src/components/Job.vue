<template>
    <div class="job">
        <h3>{{ job.id }} - {{ job.title }}</h3>
        <p>{{ snippet }}</p>
         
    </div>
    
</template>

<script>
import {computed} from 'vue'
export default {
    props: ['job'],
    setup(props){
        const snippet = computed(()=>{
            return props.job.body.substring(0,50) + ' ...'
        })
        return {snippet}
    }
}
</script>

<style scoped>
p {
    text-align: left;
    width: 500px;
    margin: auto;
}

.job {
    border: 5px double chocolate;
    margin-bottom: 5px;
    padding: 5px;
}

</style>