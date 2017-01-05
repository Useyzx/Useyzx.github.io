angular.module('kaifanla',['ng','ngRoute','kaifanlaControllerModule']).config(function($routeProvider) {

	$routeProvider
	.when('/start',{
		templateUrl:'view/start.html',
		controller:'startCtrl'
	})
	.when('/main',{
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	})
	.when('/detail',{
		templateUrl:'view/detail.html',
		controller:'detailCtrl'
	})
	.otherwise({
		redirectTo:'/start'
	});
});
