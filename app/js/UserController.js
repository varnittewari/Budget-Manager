budgetControllers.controller('UserLoginCtrl', ['$scope', '$http', '$location', 'UserService',
	function UserLoginCtrl($scope, $http, $location, userSrv) {

		$scope.logIn = function(user) {
			$http.post("http://localhost:3000/login", user, {withCredentials: true}).success(function(data) {
	    		userSrv.isLogged = true;
				userSrv.user = data;
				
				$location.path("/accounts");
		    });
		};
	}
]);

budgetControllers.controller('UserRegisterCtrl', ['$scope', '$http', '$location', 'UserService',
	function UserRegisterCtrl($scope, $http, $location, userSrv) {

		$scope.register = function(user) {
			if (user.username != undefined && user.password != undefined) {
				$http.post("http://localhost:3000/register", user, {withCredentials: true}).success(function(data) {
					$location.path("/login");
			    });
			}
		};
	}
]);

budgetControllers.controller('UserLogoutCtrl', ['$scope', '$http', '$location', 'UserService',
	function UserLogoutCtrl($scope, $http, $location, userSrv) {

		$http.get("http://localhost:3000/logout", {withCredentials: true}).success(function(data) {
			userSrv.isLogged = false;
			userSrv.user = {};
			$location.path("/login");
	    });

	}
]);


