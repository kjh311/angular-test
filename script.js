  // alert('asdfasd');

  angular.module("myApp", [])

         .controller("HelloController", function($scope) {
            $scope.helloTo = {};
            $scope.helloTo.title = "AngularJS";
         });

         // .controller("Countries", function($scope) {
         //    $scope.countries = {};
         //    $scope.countries = ['Portugal', 'Turkey', 'Japan', 'Mexico']
         // });
