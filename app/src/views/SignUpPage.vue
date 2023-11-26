<template>
  <div class="resgisterWrapper">
    <div class="sign-up-container">
      <div class="registerLabels">
        <label> Welcome to PostIt </label>
        <br>
        <a> Create an account </a>
      </div>
      <br>      
      <form class="registerForm">
        <div class="inputThings">
          <label>Email </label>
          <input class="registerInputBox" type="Email" id="email" placeholder="Email" name="email" required>
          <br>
          <label>Password </label>
          <input class="registerInputBox" type="Password" id="password" placeholder="Password" name="password" required>
          <br>
        </div>
        <br>
        <a id="submit" >
          <input @click="() => checkPassword()"  type="submit" id="submit" value="Signup"/>
        </a>      
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "password",
  methods: {
    checkPassword() {
      if(document.getElementById("password").value.match(/(?=.*\d)(?=(.*[a-z]){2,})(?=.*[A-Z])(?=.*[_])(?=.*[0-9]).{8,15}/g) && 
        document.getElementById("password").value.length < 15 &&
        document.getElementById("password").value[0] !== document.getElementById("password").value[0].toLowerCase()) {
          window.location="index.html";
      }
      else {
        alert("This password is not valid \n The password needs to: \n * Be at least 8 and less than 15 chars \n * Include at least one uppercase alphabet character \n * Include at least two lowercase alphabet characters \n * Include at least one numeric value \n * Start with an uppercase alphabet \n * Include the character '_' ");
      }
    }
  }
}
</script>

<style scoped>

.resgisterWrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.sign-up-container{
  height: wrap;
  width: max-content;
  background-color: #17562b;
  border-radius: 12px;
  margin: 10px;
  font-size: xx-large;
  text-align: center;
  padding: 20px;
}

.registerLabels a{
  color:red;
}

.registerLabels label{
  color:black;
  font-weight: bold;
}

.inputThings {
  text-align: right;
}

.registerForm{
  margin-bottom: 10px;
  width: 100%;
  justify-items: flex-start;
  align-items: center;
}

.registerForm label {
  font-size: x-large;
}


.registerInputBox{
  margin: 5px;
  padding: 10px;
  border-radius: 15px;
  border-width: 0px;
}


.registerForm input:last-child{
  background-color: #e26e91;
  margin: 10px 40px 10px 5px;
  padding: 10px 20px 10px 20px;
  border: unset;
  border-radius: 10px;
}

#submit{
  background-color: #e26e91;
  color:black;
  border-radius: 12px;
  border: unset;
  padding: 0.5rem;
  font-size: x-large;
  width: fit-content;
  margin: 10px;
  cursor: pointer;
  }

.registerInputBox:invalid ~  a {
  pointer-events: none;
}

.registerInputBox:valid ~  a {
  pointer-events: fill;
}
</style>

