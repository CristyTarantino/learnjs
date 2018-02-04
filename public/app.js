'use strict';

// create namespace that helps giving structure to the application and helps to avoid name collisions
var learnjs = {};

// router function
learnjs.showView = function (hash) {
  var problemView = $('<div class="problem-view">').text('Coming Soon');
  $('.view-container').empty().append(problemView);
};