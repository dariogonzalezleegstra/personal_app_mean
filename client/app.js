var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list.html',
			controller:'perController'
		})
		.when('/personals', {
			templateUrl:'templates/list.html',
			controller:'perController'
		})
		.when('/personals/create', {
			templateUrl:'templates/add.html',
			controller:'perController'
		})
		.when('/personals/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'perController'
		})
		.when('/personals/:id/show', {
			templateUrl:'templates/show.html',
			controller:'perController'
		})
		.when('/personals/:id/entry', {
			templateUrl:'templates/entry.html',
			controller:'perController'
		})
		.when('/report', {
			templateUrl:'templates/reporte.html',
			controller:'perController'
		});
});
