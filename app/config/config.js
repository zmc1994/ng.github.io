var app = angular.module('qmgj', ['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider.state('home',{
		url : '/home',
		templateUrl : 'views/home.html',
		controller:'homeController'
	})
	.state('detail',{
		url :'/detail',
		templateUrl:'views/detail.html',
	})
	.state('login',{
		url :'/login',
		templateUrl:'views/login.html',
	})
	.state('regit',{
		url :'/regit',
		templateUrl:'views/regit.html',
	})
	.state('list',{
		url : '/list',
		templateUrl:'views/list.html',
	})
	.state('mypage',{
		url : '/mypage',
		templateUrl:'views/mypage.html',
	})
	.state('mypage.mypage1',{
		url : '/mypage1',
		templateUrl:'views/mypage1.html',
	})
	.state('mypage.mypage2',{
		url : '/mypage2',
		templateUrl:'views/mypage2.html',
	})

	.state('mypage.mypage3',{
		url : '/mypage3',
		templateUrl:'views/mypage3.html',
	})
	.state('mypage.mypage3.1',{
		url : '/mypage3-1',
		templateUrl:'views/mypage3-1.html',
	})
	.state('mypage.mypage3.2',{
		url : '/mypage3-2',
		templateUrl:'views/mypage3-2.html',
	})
	.state('mypage.mypage3.3',{
		url : '/mypage3-3',
		templateUrl:'views/mypage3-3.html',
	})

	.state('mypage.mypage4',{
		url : '/mypage4',
		templateUrl:'views/mypage4.html',
	})
	.state('mypage.mypage5',{
		url : '/mypage5',
		templateUrl:'views/mypage5.html',
	})
	.state('pay1',{
		url:'/pay1',
		templateUrl:'views/pay1.html'
	})
	.state('pay2',{
		url:'/pay2',
		templateUrl:'views/pay2.html'
	})
	.state('pay3',{
		url:'/pay3',
		templateUrl:'views/pay3.html'
	})
}]);
