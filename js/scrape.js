
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
        '/279618212103376', 'GET', {'fields' : 'name, feed.limit(30)'},
        function (response) {
          console.log(response);
          for (var i = 0; i < 30; i++) {
            console.log(response.feed.data[i].message);
            if (~response.feed.data[i].message.indexOf('$')) {
              $('.card-holder').prepend(createListingCard(findPrice(response.feed.data[i].message), response.feed.data[i].message));
            }
          }
          Materialize.showStaggeredList('#card-list');
        });
      }
      else {
        console.log('Logging in...');
        FB.login();
        FB.api(
          '/279618212103376', 'GET', {'fields' : 'name, feed.limit(30)'},
          function (response) {
            console.log(response);
            for (var i = 0; i < 30; i++) {
              console.log(response.feed.data[i].message);
              if (~response.feed.data[i].message.indexOf('$')) {
                $('.card-holder').prepend(createListingCard(findPrice(response.feed.data[i].message), response.feed.data[i].message));
              }
            }
            Materialize.showStaggeredList('#card-list');
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

    var findPrice = function(str) {
      var price;
      var index;
      if (~str.indexOf('-')) {
        index = str.indexOf('-');
        if (index < str.length / 2) {
          return str.substring(0, index);
        }
      }
      if (~str.indexOf('$')) {
        index = str.indexOf('$');
        price = str.charAt(index++);
        while (!isNaN(str.charAt(index))) {
          price += str.charAt(index++);
        }
        return price;
      }
      else {
        return 'Price unknown';
      }
    };
