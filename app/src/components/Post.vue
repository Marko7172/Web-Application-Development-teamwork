
<template>
    <div class="post post1">
        <div class="post-content">
            <div class="post-header">
            <img id="profile-image" src="app\src\assets\profiil.png"/>
            <span>{{ createTime }}</span>
            </div>
            <h2>{{ postHeader }}</h2>
            <p>{{ postContent }}</p>
            <img id="post-image" v-if="postPicture" :src="postPicture" />
            <img id="like-image" @click="() => increaseLikes()" src="app\src\assets\like.png"/>
            <span>{{like}} likes</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        id: Number,
        createTime: String,
        postHeader: String,
        postContent: String,
        postPicture: String,
        like: Number
    },
    methods: {
        increaseLikes() {
            this.$store.dispatch("increaseLikesAct", { id: this.id })
        },
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


/* General sibling selector here */
.post-description h2 ~ p {
    text-decoration: solid;
    color: rgb(45, 45, 45);;
}
</style>
