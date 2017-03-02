'use strict';

/**
 * @ngdoc overview
 * @name appredomaycomApp
 * @description
 * # appredomaycomApp
 *
 * Main module of the application.
 */
angular
	.module('appredomaycomApp', [
		'ngAnimate',
		'ngAria',
		'ngCookies',
		'ngMessages',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ui.router',
		'ngMaterial',
		'LocalStorageModule'
	])
	.config(function ($httpProvider) {
		/*
		http://blog.thoughtram.io/angularjs/2015/01/14/exploring-angular-1.3-speed-up-with-applyAsync.html
		*/
		$httpProvider.useApplyAsync(true);
	})
	.config(function ($compileProvider) {
		/*
		improves production angular performance by
		 https://medium.com/@hackupstate/improving-angular-performance-with-1-line-of-code-a1fb814a6476#.jv3h77j2z
		 */
		$compileProvider.debugInfoEnabled(true);
	})
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('docs-dark', 'default')
			.primaryPalette('light-blue')
			.dark();
	})
	.config(function (localStorageServiceProvider) {
		localStorageServiceProvider
			.setPrefix('resume');
	})
	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('main', {
				url: '/?',
				reloadOnSearch: false,
				views: {
					'main': {
						templateUrl: 'views/main.html'
					},
					'content@main': {
						templateUrl: 'views/main.resume.html',
						controller: 'LocalCtrl as rc'
					}
				}
			})
			.state('main.json', {
				url: 'json',
				views: {
					'content@main': {
						templateUrl: 'views/main.json.html',
						controller: 'LocalCtrl as rc'
					}
				}
			})
			.state('main.resume', {
				url: 'resume/:id',
				views: {
					'content@main': {
						templateUrl: 'views/main.resume.html',
						controller: 'ResumeCtrl as rc'
					}
				}
			})
			.state('main.experience', {
				url: 'experience',
				views: {
					'content@main': {
						templateUrl: 'views/main.experience.html',
						controller: 'ResumeCtrl as rc'
					}
				}
			});
		$urlRouterProvider.otherwise('/');
	});
