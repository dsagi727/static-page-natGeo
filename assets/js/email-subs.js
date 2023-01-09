// E-mail validation
const email = document.getElementById("email");
const alert = document.getElementById("alert");

function validateEmail() {
  const validEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validEmailPattern.test(email.value)) {
    email.style.border = "3px solid green";
    document
      .querySelector(".subscripton__email--btn")
      .removeAttribute("disabled");
  } else if (email.value === "") {
    email.style.border = "";
    document
      .querySelector(".subscripton__email--btn")
      .setAttribute("disabled", "");
  } else {
    email.style.border = "3px solid red";
    document
      .querySelector(".subscripton__email--btn")
      .setAttribute("disabled", "");
  }
}

// fetch and redirect

(function postEmailSubs() {
  validateEmail();

  document
    .querySelector(".subscripton__email--btn")
    .addEventListener("click", () => {
      const URL = "http://localhost:3000/emailSubs";

      const emailPost = {
        email: email.value,
      };

      const params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailPost),
      };

      fetch(URL, params)
        .then((response) => response.json())
        .then(() => window.location.assign("http://127.0.0.1:5500/thanks.html"))
        .catch((err) => alert("Something went wrong, please try again later!"));
    });
})();
