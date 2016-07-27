var createCard = function() {
  var htmlText = `
    <div class='card-container'>
      <div class='row'>
        <div class='col-md-5'>
          <div class='card listing blue-grey darken-1'>
            <div class='card-content white-text'>
              <span class='card-title'>Post</span>
              <p>Test text tastes like chex</p>
            </div>
            <div class='card-action'>
              <a class='card-link' href="javascript:$(\'.card-holder\').prepend(createCard());">Create another!</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  return htmlText;
};

var createListingCard = function(price, listing) {
  var htmlText = `
    <div class='card-container'>
      <div class='row'>
        <div class='col-md-5'>
          <div class='card listing blue-grey darken-1'>
            <div class='card-content white-text'>
              <span class='card-title'>` + price + `</span>
              <p>` + listing + `</p>
            </div>
            <div class='card-action'>
              <a class='card-link' href="javascript:$(\'.card-holder\').prepend(createCard());">Create another!</a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  return htmlText;
};
