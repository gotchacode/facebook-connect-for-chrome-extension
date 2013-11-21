var successURL = 'https://www.facebook.com/connect/login_success.html';
function onFacebookLogin() {
  var access;
  if (!localStorage.accessToken) {
    chrome.tabs.getAllInWindow(null, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].url.indexOf(successURL) === 0) {
          params = tabs[i].url.split('#')[1];
          access = params.split('&')[0];
          localStorage.accessToken = access;
          chrome.tabs.onUpdated.removeListener(onFacebookLogin);
          return;
        }
      }
    });
  }
}

chrome.tabs.onUpdated.addListener(onFacebookLogin);
