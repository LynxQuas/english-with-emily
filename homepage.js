const register = document.querySelector("#register");
const login = document.querySelector("#login");

const login_form = document.querySelector("#login_form");
const register_form = document.querySelector("#register_form");

register.addEventListener("click", function (event) {
  const target = event.target;

  if (target.id !== register.id) {
    return;
  } else {
    target.classList.add("active-form");
    login_form.classList.add("hidden");
    login.classList.remove("active-form");
    register_form.classList.remove("hidden");
  }
});

login.addEventListener("click", function (event) {
  const target = event.target;

  if (target.id !== login.id) {
    return;
  } else {
    target.classList.add("active-form");
    register.classList.remove("active-form");
    register_form.classList.add("hidden");
    login_form.classList.remove("hidden");
  }
});

document.querySelector("#register-btn").addEventListener("click", function () {
  alert("Welcome, you are a member now!");
});

document.querySelector("#login-btn").addEventListener("click", function () {
  alert("Welcome, Have fun!");
});
