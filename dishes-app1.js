angular.module("myApp", ['ngMaterial'])
.controller('dialogController', dialogController);
function dialogController ($scope, $mdDialog) {
  $scope.status = '';
  $scope.showTabDialog = function(event) {
     $mdDialog.show ({
        templateUrl: 'tabDialog.tmpl.html',
        clickOutsideToClose: true,
        scope: $scope,
        preserveScope: true,
        parent:angular.element(document.body),
        targetEvent:event,
        controller: function DialogController($scope, $mdDialog) {
           $scope.closeDialog = function() {
              $mdDialog.hide();
           }
        }
     });
  };
}
