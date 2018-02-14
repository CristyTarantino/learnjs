var fixture;

function loadFixture(path) {  
  var html;
  jQuery.ajax({
    url: '/index.html',
    success: function(result) {
      html = result;
    },
    async: false
  });          
  return $.parseHTML(html);
}

function resetFixture() {
  if (!fixture) {
    //Copy any markup in our application that's contained in an element with the `markup` class
    var index = $('<div>').append(loadFixture('/index.html'));
    var markup = index.find('div.markup');

    //Take that markup and append it to the body of the test runner's page, making it avalilable to all our tests.
    fixture = $('<div class="fixture" style="display: none">').append(markup);
    $('body').append(fixture.clone());
  } else {
    $('.fixture').replaceWith(fixture.clone());
  }
}

beforeEach(function () {
  resetFixture();
});
