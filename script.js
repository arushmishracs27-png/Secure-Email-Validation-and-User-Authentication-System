// Get elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const message = document.getElementById("message");

// 🔹 Email Validation (real-time)
email.addEventListener("input", () => {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.match(pattern)) {
    email.style.border = "2px solid green";
  } else {
    email.style.border = "2px solid red";
  }
});

// 🔹 Password Strength
password.addEventListener("input", () => {
  if (password.value.length < 6) {
    message.innerText = "Weak Password";
    message.style.color = "red";
  } else if (password.value.match(/[A-Z]/) && password.value.match(/[0-9]/)) {
    message.innerText = "Strong Password";
    message.style.color = "green";
  } else {
    message.innerText = "Medium Password";
    message.style.color = "orange";
  }
});

// 🔹 Show/Hide Password
function togglePassword() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

// 🔹 Form Submit (Authentication using Local Storage)
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let savedEmail = localStorage.getItem("email");
  let savedPass = localStorage.getItem("password");

  if (email.value === savedEmail && password.value === savedPass) {
    message.innerText = "Login Successful ✅";
    message.style.color = "green";
  } else {
    message.innerText = "Invalid Credentials ❌";
    message.style.color = "red";
  }
});

// 🔹 Example Signup (run once manually if needed)
function saveUser() {
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  alert("User Registered!");
}
