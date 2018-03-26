angular.module('palService', [])

	.factory('Pal', ['$http',function($http) {
		return {
			check : function(palData) {
				return $http.post('/api/pal', palData);
			}
		}
	}]);
