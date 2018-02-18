'use strict';

// create namespace that helps giving structure to the application and helps to avoid name collisions
var learnjs = {};



// #problem-1 view
learnjs.problemView = function (problemNumber) {
  var view = $('.templates .problem-view').clone();
  view.find('.title').text('Problem #' + problemNumber);
  return view;
};

// we could use object-oriented JavaScript1 to define a data model
// First, you create JavaScript classes (which are actually just functions) that use prototypical inheritance
// to model your problem. You then create graphs of these objects in order to store your data and perform
// operations on it. If we were using that approach for this app, we’d probably wind up with Problem objects,
// which might have included a checkSolution function that accepted another object type (maybe Solution) as a parameter.
// Both of these object types might inherit persistence and serialization behavior from another object type
// (maybe Entity or Model).
// One of the limitations of object graph data models is that you have to map them back and forth to your
// underlying datastore. For example, if we were using a relational database for our app,
// then we might have to use an object-relational mapping (ORM) tool to serialize and deserialize
// our data to and from the database.
// If we used a data model with prototypical inheritance, we might run into problems when we tried to serialize
// those objects. JavaScript objects make no real distinction between values and behavior.
// Functions are just properties on an object, like any other property such as a string or a number.
// If we mix data and behavior on the objects in our model, we’ll have to separate them back out again when we go
// to serialize them to and from the database.
// Ideally, we’d like to have a more direct mapping from our model objects to the database,
// that doesn’t require this step.
// We are going to use the vanilla JavaScript data structure to hold both our problem data and
// the users’ data will map directly into records stored in our database.
// DynamoDB supports storing JSON documents as individual records,
// so choosing a data model that can be serialized easily to JSON means we’ll avoid having to do extra work
// to translate our data into a format that the database can under- stand.
// This is a great example of a situation where combining web standards
// with web services makes things much easier for us.
learnjs.problems = [
  {
    description: "What is truth?",
    code: "function problem() { return __; }"
  },
  {
    description: "Simple Math",
    code: "function problem() { return 42 === 6 * __; }"
  }
];

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

learnjs.appOnReady = function () {
  window.onhashchange = function () {
    learnjs.showView(window.location.hash);
  };

  learnjs.showView(window.location.hash);
};