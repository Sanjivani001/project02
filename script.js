document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');
    

    if (username === "" || password === "") {
      errorMessage.textContent = "Please fill in both fields.";
    } else {
      errorMessage.textContent = "";
      alert("Login Successful!");
    }
  });
  





