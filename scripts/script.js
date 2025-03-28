window.onload = function() {
    var user = "contact";
    var domain = "example.com";
    var email = user + "@" + domain;
    var emailElement = document.getElementById("email-address");
    emailElement.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
  }