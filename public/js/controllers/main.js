angular.module('palController', [])

	.controller('mainController', ['$scope','$http','Pal', function($scope, $http, Pal) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.pal = "Palindrome checker";

		$scope.checkPal = function() {
			if ($scope.formData.text != undefined) {
				Pal.check($scope.formData)
					.success(function(data) {
						$scope.pal = $scope.formData.text + data;
					})
					.error(function (error, status){
						$scope.pal = $scope.formData.text + error;
						console.log($scope.data.error.status);
					});
			}
		};
	}]);
