window.onload = function() {
    var user = "musicalmediclab";
    var domain = "gmail.com";
    var email = user + "@" + domain;
    var emailElement = document.getElementById("email-address");
    emailElement.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
  }