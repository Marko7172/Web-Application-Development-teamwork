<template>
    <div class="container-feed-main">
        <div class="container-feed-left"></div>
        <div class="container-feed-middle">
            <div class="post-wrapper">
                <div v-for="item in postList" :key="item.id" class="post">
                    <Post
                        :id="item.id"
                        :userProfilePicture="item.userProfilePicture"
                        :createTime="item.createTime"
                        :postPicture="item.postPicture"
                        :postHeader="item.postHeader"
                        :postContent="item.postContent"
                        :like="item.likes"
                    />
                </div>
                    <button id="reset-button" @click="() => resetLikes()">Reset likes</button>
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
                return this.$store.getters.getPosts
            }
        },
        methods: {
        resetLikes() {
        this.$store.dispatch("resetLikesAct")
        }
    }
}
</script>

<style scoped>
.post-header {
    padding: 15px;
    display: flex;
}

.post-header p {
    font-weight: 600;
    font-size: 25px;
    margin: 0;
    text-align: center;
    margin: auto 0 auto auto;
}

.post-content{
    width: 100%;
    text-align: center;
}

.post-description{
    padding: 40px;
}

.post-description p{
    font-size: 18px;
    margin-bottom: 10px;
}

.post-wrapper{
    display: grid;
    row-gap: 20px;
}

.post{
    background: var(--lightgreen);
    border-radius: 20px;
}
</style>
