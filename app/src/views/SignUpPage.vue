<template>
  <div class="resgisterWrapper">
    <div class="sign-up-container">
      <div class="registerLabels">
        <label>Email</label>
        <label>Password</label>
      </div>
            
      <form class="registerForm">
        <input class="registerInputBox" type="Email" id="email" placeholder="Email" name="email" required>
        <br>
        <input class="registerInputBox" type="Password" id="password" placeholder="Password" name="password" required>
        <br>
        <input @click="() => checkPassword" class="registerLoginButton" type="submit" id="submit" value="Sign up" />
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

