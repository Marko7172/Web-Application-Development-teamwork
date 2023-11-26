<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  background-color: #5b9d70;

}


header {
    display: flex;
    background-color: #17562b;
    border-radius: 20px;
    align-items: center;
    height: 120px;
    margin: 10px 10px 10px 10px;
}

nav label{
  font-size: 40px;
}

nav a {
  color: black;
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
  padding: 10px;
}

nav a:hover {
  color: #ed2525;
  border-radius: 10px;
}

body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: unset;
}

</style>
