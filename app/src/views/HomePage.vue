<template>
    <div class="container-feed-main">
        <div class="container-feed-left"></div>
        <div class="container-feed-middle">
            <div class="post-wrapper">
                <div v-for="item in postList" :key="item.id" class="posts">
                    <Post
                        :userProfilePicture="item.userProfilePicture"
                        :creatTime="item.creatTime"
                        :postPicture="item.postPicture"
                        :postHeader="item.postHeader"
                        :postContent="item.postContent"
                    />
                </div>
            </div>
        </div>
        <div class="container-feed-right"></div>
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
            console.log("Siin on")
            return this.$store.getters.getPosts
        }
    },
    mounted() {
        this.postList = this.postListStore
    },
}
</script>
