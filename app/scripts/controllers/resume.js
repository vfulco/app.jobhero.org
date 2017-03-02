'use strict';

/**
 * @ngdoc function
 * @name appredomaycomApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the appredomaycomApp
 */
angular.module('appredomaycomApp')
	.controller('ResumeCtrl', function (localStorageService, $state, $mdDialog, $location, $stateParams, $document, api) {
		console.log('resume controller!');
		var vm = this;

		vm.customFullscreen = true;
		vm.resumeId = $stateParams.id || '';
		vm.resume = {};
		vm.resume.info = {};
		vm.resume.experience = [];
		vm.resume.technology = [];

		vm.print = function () {
			var lowerName = name.toLowerCase();
			var underName = lowerName.replace(' ', '_');
			$document[0].title = underName + '_resume_' + new Date().getFullYear();
			window.print();
		};

		// vm.getLocalResume = function () {
		// 	if ($location.search().resume) {
		// 		var urlResume = $location.search().resume;
		// 		var urlResumeParsed = JSON.parse(decodeURIComponent(urlResume));
		// 		localStorageService.set('resume', urlResumeParsed);
		// 		vm.resume = localStorageService.get('resume');
		// 	} else {
		// 		vm.resume = localStorageService.get('resume');
		// 	}
		// 	if (vm.resume && vm.resume.info) {
		// 		var name = vm.resume.info.fullname || 'your_resume';
		// 		var lowerName = name.toLowerCase();
		// 		var underName = lowerName.replace(' ', '_');
		// 		$document[0].title = underName + '_resume_' + new Date().getFullYear();
		// 	}
		// };
		// vm.getLocalResume();




		vm.updateApiResume = function (resume) {
			console.log(vm.resumeId, resume);
			delete resume._id;
			api.updateResume(vm.resumeId, resume)
				.then(function (response) {
					vm.getApiResume(vm.resumeId);
				}, function (error) {
					console.log('error: ', error);
				});
		};

		vm.getApiResume = function (id) {
			api.getResume(id)
				.then(function (response) {
					vm.resume = response.data.data[0];
					if (!vm.resume.info) {
						vm.editResumeInfo();
					}
				}, function (error) {
					console.log('error: ', error);
				});
		};
		vm.getApiResume(vm.resumeId);



		vm.editResumeInfo = function (ev) {
			$mdDialog.show({
					controller: 'ApiDialogCtrl as dc',
					templateUrl: 'views/dialog/edit.info.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume info updated');
					vm.updateApiResume(resume);
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeExperience = function (ev) {
			$mdDialog.show({
					controller: 'ApiDialogCtrl as dc',
					templateUrl: 'views/dialog/edit.experience.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume experience updated', resume);
					vm.updateApiResume(resume);
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeTechnology = function (ev) {
			$mdDialog.show({
					controller: 'ApiDialogCtrl as dc',
					templateUrl: 'views/dialog/edit.technology.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					vm.updateApiResume(resume);
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeSkills = function (ev) {
			$mdDialog.show({
					controller: 'ApiDialogCtrl as dc',
					templateUrl: 'views/dialog/edit.skills.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume skills updated');
					vm.updateApiResume(resume);
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeEducationInterests = function (ev) {
			$mdDialog.show({
					controller: 'ApiDialogCtrl as dc',
					templateUrl: 'views/dialog/edit.education-interests.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume education and interests updated');
					vm.updateApiResume(resume);
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

		vm.editResumeHistory = function (ev) {
			$mdDialog.show({
					controller: 'ApiDialogCtrl as dc',
					templateUrl: 'views/dialog/edit.history.html',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: vm.customFullscreen // Only for -xs, -sm breakpoints.
				})
				.then(function (resume) {
					console.log('resume history updated');
					vm.updateApiResume(resume);
				}, function () {
					console.log('you canceled the dialog!');
				});
		};

	});
