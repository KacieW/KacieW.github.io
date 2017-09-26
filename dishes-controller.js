angular.module("myApp")
  .controller('MenuController', ['$scope', "menuFactory", function($scope, menuFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.breakfastitems = menuFactory.getDishes();
    $scope.select = function(setTab) {
      $scope.tab = setTab;
    }
    $scope.isSelected = function(checkTab) {
      return ($scope.tab === checkTab);
    }
    $scope.select = function(setTab) {
      $scope.tab = setTab;
      if (setTab === 2)
        $scope.filtText = "appetizer";
      else if (setTab === 3)
        $scope.filtText = "maindish";
      else if (setTab === 4)
        $scope.filtText = "noodles";
      else if (setTab === 5)
        $scope.filtText = "dessert";
      else
        $scope.filtText = "";
    }
  }])
  // .controller("ContactController", ["$scope", function($scope) {
  //   $scope.feedback = {
  //     email: "",
  //     password: ""
  //   };
  // }])
  // .controller("FeedbackController", ["$scope", function($scope) {
  //   $scope.sendFeedback = function() {
  //     console.log($scope.feedback);
  //   }
  // }])
  .controller('DishDetailController', ['$scope', '$routeParams', "menuFactory", function($scope, $routeParams, menuFactory) {
    //$scope.breakfast = UserService.get($routeParams.id);
    $scope.breakfast = menuFactory.getDish(1);
    //$scope.breakfast =menuFactory.getDish(parseInt($routeParams.id, 10));
  }]);
