 var app = angular.module("Users",[]);
	app.controller("usersList",function($scope,$http , $location ){
		
		$scope.num = 0 ;
		
		$scope.loadAll = function (){
			$http.get("https://api.github.com/users")
			
			.then(function(response) {
			
			$scope.users = response.data;
			
			temp = $scope.num+10 ;
			$scope.arr = [];
			for ( i=$scope.num ;  i< temp && i<$scope.users.length; i++)
			{
				$scope.arr.push($scope.users[i]);
				$scope.num++; 
				if ($scope.num >= $scope.users.length)
					$scope.num = 0 ;				
				
			}
			});
		}
		
		$scope.loadUser = function(userid)
		{
			$http.get("https://api.github.com/users/"+userid)
			.then(function(response) {
			
			$scope.user = response.data;
			$scope.name = $scope.user.name;
			$scope.avatar_url = $scope.user.avatar_url;
			$scope.email = $scope.user.email;
			$scope.id = $scope.user.id;
			$scope.created_at = $scope.user.created_at;
			
			$location.url("/users/" + userid);
			
			});
		}
		
		
});
			
