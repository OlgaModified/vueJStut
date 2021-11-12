<template>
    <div v-if="error"> {{ error }}</div>
    <div v-if="post" class="post">
        <h2> Post title: {{ post.title }}</h2>
        <p class="pre">{{ post.body }}</p>
    </div>  
</template>

<script>
import getPost from '../composables/getPost.js'
export default {
    props: ['id'],
    setup(props) {
        const {post, error, loadPost } = getPost(props.id)
        loadPost()
        return {post, error}
    }
}
</script>

<style>
.post {
    max-width: 800px;
    margin: 0 auto;
    background-color: cornsilk;
    padding: 10px;
    border: none;
    border-radius: 12px;
}

.post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
}

.pre{
    white-space: pre-wrap;
}
</style>