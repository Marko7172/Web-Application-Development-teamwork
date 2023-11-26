
<template>
    <div class="post post1">
        <div class="post-content">
            <div class="post-header">
            <img src="app\src\assets\profiil.png"
                width="40px" 
                height="40px"
            />
            <span>{{ createTime }}</span>
            </div>
            <h2>{{ postHeader }}</h2>
            <p>{{ postContent }}</p>
            <img v-if="postPicture" :src="postPicture" />
            <img @click="() => increaseLikes()" src="app\src\assets\like.png" height="auto" width="30px" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        createTime: String,
        postHeader: String,
        postContent: String,
        postPicture: String
    },
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
