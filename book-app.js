(function() {
  var app = angular.module('bookStore', []);
  app.controller('bookStoreController', function() {
    this.book = books;
  });
  app.controller('tabController', function() {
    this.tab = 1;
    this.setTab = function(newValue) {
      this.tab = newValue;
    };
    this.isSet = function(tabName) {
      return this.tab === tabName;
    };
  });
  app.controller('reviewController', function($scope) {
    $scope.review = {};
    $scope.addReview = function(book) {
      $scope.review.createdOn = Date.now();
      book.reviews.push($scope.review);
      $scope.reviewForm.$setPristine();
      $scope.review = {};
    };
  });
  var books = [{
    title: 'Professional JavaScript for Web Developer',
    price: 50.22,
    author: 'Nicholas C. Zakas',
    description: 'Offers a detailed discussion of the components that make up a javascript implementation.',
    reviews: [{
      stars: 4,
      comments: 'I love this book.',
      author: 'asdf123@gmail.com',
      createdOn: 1397490980837
    }, {
      stars: 2,
      comments: 'Not really for beginner.',
      author: 'qwewqw@gmail.com',
      createdOn: 1397490980837
    }, {
      stars: 3,
      comments: 'good infomation, but hard to understand.',
      author: 'eee224@yahoo.com',
      createdOn: 1397490980837
    }]
  }, {
    title: 'Head First JavaScript Programming',
    price: 22.00,
    author: 'Eric Freeman & Elisabeth Robson',
    description: 'This brain-friendly guide teaches you everything from JavaScript language fundamentals to advanced topices.',
    reviews: [{
      stars: 5,
      comments: 'Very interesting book',
      author: 'zess@gmail.com',
      createdOn: 1397490980837
    }, {
      stars: 5,
      comments: 'Awesome!',
      author: 'tktws8skej@hotmail.com',
      createdOn: 1397490980837
    }]
  }, {
    title: 'Learning Node',
    price: 34.99,
    author: 'Shelley Powers',
    description: 'Explore the frameworks and functionality for full-stack Node development.',
    reviews: [{
      stars: 4,
      comments: 'Effective introduction',
      author: 'joib@yahoo.com',
      createdOn: 1397490980837
    }]
  }];
})();
