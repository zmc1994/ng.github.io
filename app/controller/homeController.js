app.controller('homeController', ['$scope','$http',function($scope,$http){
		$http({
		url:'./json/home.json',
		type:'get'
	}).success(function(res){
		$scope.arr = res.imgUrl;
	})
}])