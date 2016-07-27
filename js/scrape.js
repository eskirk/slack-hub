
window.fbAsyncInit = function() {
  var accessToken;
  console.log('Success... for now.');
  FB.init({
    appId      : '1348890865125456',
    xfbml      : true,
    cookie     : true,
    version    : 'v2.7'
  });

  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      console.log('Logged in.');
      accessToken = response.authResponse.accessToken;
      console.log(accessToken);
      FB.api(
        '/127031727370713', 'GET', {'fields' : 'name,feed.limit(10)'},
        function (response) {
          console.log(response);
          for (var i = 0; i < 10; i++) {
            console.log(response.feed.data[i].message);
          }
        });
      }
      else {
        console.log('Already logged in');
        FB.login();
        FB.api(
          '/127031727370713', 'GET', {'fields' : 'name,feed.limit(10)'},
          function (response) {
            console.log(response);
            for (var i = 0; i < 10; i++) {
              console.log(response.feed.data[i].message);
            }
          });
        }
      });
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
