function login() {
  // Check only if we are in this page
  if (window.location.href !== "https://webapps.unitn.it/gestionecorsi/") {
    return;
  }
  login_url = "https://webapps.unitn.it/GestioneCorsi/IndexAuth";
  var links = document.getElementsByTagName("a");
  for (var i = 0, max = links.length; i < max; i++) {
    // If link to login page is detected
    if (links[i].href === login_url) {
      // Go to login page
      window.location.replace(login_url);
      return;
    }
  }
}

function login_2() {
  // If url is not matching return
  if (!window.location.href.includes("https://didatticaonline.unitn.it/dol/")) {
    return;
  }
  login_url = "https://didatticaonline.unitn.it/dol/login/index.php";
  var links = document.getElementsByTagName("div");
  for (var i = 0, max = links.length; i < max; i++) {
    if (
      links[i].textContent ===
      "Guests cannot access this course. Please log in."
    ) {
      window.location.replace(login_url);
      return;
    }
  }
  login_url = "https://didatticaonline.unitn.it/dol/auth/shibboleth/index.php";
  var links = document.getElementsByTagName("b");
  for (var i = 0, max = links.length; i < max; i++) {
    if (links[i].textContent === "Se hai un account @unitn.it") {
      window.location.replace(login_url);
      return;
    }
  }
}

function login_3() {
  if (!window.location.href.includes("https://idp.unitn.it/idp/")) {
    return;
  }
  document.getElementById("clid").value = user_email;
  document.getElementById("inputPassword").value = user_password;
  document.getElementById("btnAccedi").click();
  return;
}

login();
login_2();
login_3();
