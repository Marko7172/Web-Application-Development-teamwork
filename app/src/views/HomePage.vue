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
.container-feed-main {
    display: flex;
    flex-direction: row;
    height: 100%;
}

.post-wrapper {
    width: 70%;
}
    
.container-feed-left,
.container-feed-right {
    width: 100%;
    background-color: #17562b;
    margin: 0 10px;
    border-radius: 12px;
}

/* Need peaks normi minema, kui postitused korda saavad */

#reset-button {
    background-color: #e26e91;
    color: black;
    border-radius: 12px;
    border: unset;
    padding: 0.5rem;
    font-size: x-large;
    width: fit-content;
    margin: 10px;
    cursor: pointer;
}
</style>
