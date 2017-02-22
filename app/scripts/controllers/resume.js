'use strict';

/**
 * @ngdoc function
 * @name appredomaycomApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the appredomaycomApp
 */
angular.module('appredomaycomApp')
	.controller('ResumeCtrl', function (localStorageService, $state, $mdDialog, $location, $stateParams, $document) {
		console.log('resume controller!');
		var vm = this;

		vm.customFullscreen = true;
		vm.resume = {};
		vm.resume.info = {};
		vm.resume.experience = [];
		vm.resume.technology = [];
		vm.resume = localStorageService.get('resume');


		vm.print = function () {
			window.print();
		};

		vm.getLocalResume = function () {
			if ($location.search().resume) {
				var urlResume = $location.search().resume;
				var urlResumeParsed = JSON.parse(decodeURIComponent(urlResume));
				localStorageService.set('resume', urlResumeParsed);
				vm.resume = localStorageService.get('resume');
			} else {
				vm.resume = localStorageService.get('resume');
			}
			if (vm.resume && vm.resume.info) {
				var name = vm.resume.info.fullname || 'your_resume';
				var lowerName = name.toLowerCase();
				var underName = lowerName.replace(' ', '_');
				$document[0].title = underName + '_resume_' + new Date().getFullYear();
			}
		};
		vm.getLocalResume();

		vm.editResumeInfo = function (ev) {
			$mdDialog.show({
					controller: 'DialogCtrl as dc',
					templateUrl: 'views/dialog/edit.info.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume info updated');
					vm.getLocalResume();
				}, function () {
					console.log('you canceled the dialog!');
				});
		};
		vm.editResumeExperience = function (ev) {
			$mdDialog.show({
					controller: 'DialogCtrl as dc',
					templateUrl: 'views/dialog/edit.experience.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume experience updated');
					vm.getLocalResume();
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeTechnology = function (ev) {
			$mdDialog.show({
					controller: 'DialogCtrl as dc',
					templateUrl: 'views/dialog/edit.technology.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume experience updated');
					vm.getLocalResume();
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeSkills = function (ev) {
			$mdDialog.show({
					controller: 'DialogCtrl as dc',
					templateUrl: 'views/dialog/edit.skills.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume skills updated');
					vm.getLocalResume();
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeEducationInterests = function (ev) {
			$mdDialog.show({
					controller: 'DialogCtrl as dc',
					templateUrl: 'views/dialog/edit.education-interests.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume education and interests updated');
					vm.getLocalResume();
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeHistory = function (ev) {
			$mdDialog.show({
					controller: 'DialogCtrl as dc',
					templateUrl: 'views/dialog/edit.history.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume history updated');
					vm.getLocalResume();
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		if (!vm.resume) {
			vm.editResumeInfo();
		}

	});
