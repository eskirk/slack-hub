$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1348890865125456',
      version: 'v2.5'
    });
  });
});

window.fbAsyncInit = function() {
  FB.init({
    appId      : '1348890865125456',
    xfbml      : true,
    cookie     : true,
    version    : 'v2.7'
  });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log('Logged in.');
      var accessToken = response.authResponse.accessToken;
    }
    else {
      console.log('oh boy');
      FB.login();
    }
  });

  FB.api(
    "/279618212103376",
    function (response) {
      console.log('wtf');
      if (response && !response.error) {
        console.log('omfg');
      }
      else {
        console.log(response.error);
      }
    });
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
