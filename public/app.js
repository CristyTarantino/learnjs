'use strict';

// create namespace that helps giving structure to the application and helps to avoid name collisions
var learnjs = {};

// #problem-1 view
learnjs.problemView = function (problemNumber) {
  var title = 'Problem #' + problemNumber + ' Coming soon!';
  return $('<div class="problem-view">').text(title);
};

// router function that associates hashes with view functions
// N.B. view creation behaviours are out from the router function
learnjs.showView = function (hash) {
  var hash = hash || '';

  // JavaScript object that acts as a lookup for the hash values association to their appropriate view functions
  // Each view function returns a jQuery object that contains the markup for the required view
  var routes = {
    '#problem': learnjs.problemView
  };

  var hashParts = hash.split('-');
  var queryPart = hashParts[0];
  var queryParam = hashParts[1];

  var viewFn = routes[queryPart];

  // If the router can find a route that matches the name of this hash,
  // it will invoke the appropriate view function to create the view,
  // and it will replace the view-container element with the view's markup.
  // If it can't find a matching route, it will do nothing, leaving the landing page in place.
  if (viewFn) {
    $('.view-container').empty().append(viewFn(queryParam));
  }
};

learnjs.oppOnReady = function () {
  window.onhashchange = function () {
    learnjs.showView(window.location.hash);
  };

  learnjs.showView(window.location.hash);
};