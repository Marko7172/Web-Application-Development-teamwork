<template>
    <header>
        <nav>
            <div class="left">
                <router-link to="/">Home</router-link> |
                <router-link to="/add">Add Post</router-link>
            </div>
            <div class="middle">
                <router-link to="/login">Log in</router-link>
                <router-link to="/signup">Sign up</router-link>
            </div>
        </nav>    
           
    </header>
</template>

<style scoped>

header {
    display: flex;
    background-color: #17562b;
    border-radius: 20px;
    align-items: center;
    height: 120px;
    margin: 10px 10px 10px 10px;
}

header > *{
    flex: 1 1 0;
}

header:first-child {
    padding-left: 20px;
    font-size: 20px;
}

/* Target second child*/
header nav:nth-child(2) a{
    margin: 0 10px 0 10px;
    font-size: 20px;
    color: #e26e91;
    padding: 10px;

}

header nav:nth-child(2) a:hover{
    background-color: white;
    border-radius: 10px;
}

header nav:nth-child(2){
    justify-content: center;
}

</style>