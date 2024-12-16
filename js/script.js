document.addEventListener("DOMContentLoaded", () => {
  let accessKey = sessionStorage.getItem("accessKey");
  if (
    !accessKey &&
    (window.location.pathname === "/springBitLab2.githup.io/index.html" ||
      window.location.pathname ===
        "/springBitLab2.githup.io/pages/ExchangeRates.html")
  ) {
    window.location.href =
      window.location.origin + "/springBitLab2.githup.io/pages/auth.html";
  }
});
function setSession() {
  let persons = localStorage.getItem("persons");
  let parsetJson = JSON.parse(persons);
  let login = document.querySelector("#login");
  let password = document.querySelector("#password");
  if (parsetJson.length) {
    parsetJson.forEach((element) => {
      if (element.login == login.value && element.password == password.value) {
        sessionStorage.setItem("accessKey", Math.random());
        window.location.href =
          window.location.origin + "/springBitLab2.githup.io/index.html";
      }
    });
  }
}
function setLocalStoreg() {
  let login = document.querySelector("#login");
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");
  if (login.value === "") {
    alert("Введите логин");
    return;
  }
  if (password.value === "") {
    alert("Введите пароль");
    return;
  }
  if (email.value === "") {
    alert("Введите email");
    return;
  }
  let persons = localStorage.getItem("persons");
  let person = {
    login: login.value,
    password: password.value,
    email: email.value,
  };
  console.log(persons);
  if (!persons) {
    person.id = 0;
    localStorage.setItem("persons", JSON.stringify([person]));
  } else {
    let persons = localStorage.getItem("persons");
    let parsetJson = JSON.parse(persons);
    console.log(parsetJson);
    person.id = parsetJson.length;
    parsetJson.push(person);
    localStorage.setItem("persons", JSON.stringify(parsetJson));
  }
  window.location.href =
    window.location.origin + "/springBitLab2.githup.io/pages/auth.html";
}
function regisPage() {
  window.location.href =
    window.location.origin + "/springBitLab2.githup.io/pages/regis.html";
}
function authPage() {
  window.location.href =
    window.location.origin + "/springBitLab2.githup.io/pages/auth.html";
}
function clearSession() {
  window.sessionStorage.clear();
}
