function displayUser(user) {
  console.log(user);
}

if (localStorage.accessToken) {
  var graphUrl = "https://graph.facebook.com/me?" + localStorage.accessToken + "&callback=displayUser", user;
  var script = document.createElement("script");
  script.src = graphUrl;
  document.body.appendChild(script);
  displayUser(user);
}
