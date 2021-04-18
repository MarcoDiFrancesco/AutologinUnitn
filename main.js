// example@unitn.it
const email = "";
// password
const password = "";

const url = window.location.href;

if (url === "https://webapps.unitn.it/gestionecorsi/") {
  const links = document.getElementsByTagName("a");
  for (const link of links) {
    const text = link.textContent;
    if (text === "Login") {
      window.location.replace(
        "https://webapps.unitn.it/GestioneCorsi/IndexAuth"
      );
    }
  }
}

if (url === "https://didatticaonline.unitn.it/dol/") {
  const spans = document.getElementsByTagName("span");
  for (const link of spans) {
    const text = link.textContent;
    if (text.includes("You are not logged in")) {
      window.location.replace(
        "https://didatticaonline.unitn.it/dol/loginUniTN.php"
      );
    }
  }
} else if (url.includes("https://didatticaonline.unitn.it/dol/")) {
  // Example: https://didatticaonline.unitn.it/dol/enrol/index.php?id=29973
  let links = document.getElementsByTagName("div");
  for (const link of links) {
    const text = link.textContent;
    if (text.includes("Guests cannot access this course. Please log in.")) {
      window.location.replace(
        "https://didatticaonline.unitn.it/dol/login/index.php"
      );
    }
  }
}

if (url === "https://didatticaonline.unitn.it/dol/loginUniTN.php") {
  window.location.replace(
    "https://didatticaonline.unitn.it/dol/auth/shibboleth/index.php"
  );
}

if (url === "https://www.esse3.unitn.it/Home.do") {
  window.location.replace("https://www.esse3.unitn.it/auth/Logon.do");
}

if (window.location.href.includes("https://idp.unitn.it/idp/")) {
  if (email && password) {
    document.getElementById("clid").value = email;
    document.getElementById("inputPassword").value = password;
    document.getElementById("btnAccedi").click();
  }
}
