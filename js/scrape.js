$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('http://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1348890865125456',
      version: 'v2.5'
    });
  });
});
