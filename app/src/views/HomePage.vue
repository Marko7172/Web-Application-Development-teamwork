<template>
    <div>
        <div>siin</div>
        <div v-for="item in postList" :key="item.id" class="posts">
            <Post 
            :createTime="item.creatTime"
            :postPicture="item.postPicture"
            :postHeader="item.postHeader"
            :postContent="item.postContent"
            />
        </div>
    </div>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
    components: {
        Post
    },
    computed: {
        postList() {
            console.log("siin")
            return this.$store.getters.getPosts
        }
    },
    mounted() {
        this.postList = this.postListStore
    },
}
</script>
