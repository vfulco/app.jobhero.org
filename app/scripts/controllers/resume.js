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

		vm.currentTemplate = {
			name: 'Modern',
			url: 'views/template/t2.html',
			id: 2
		};
		vm.templates = [{
				name: 'Classic',
				url: 'views/template/t1.html',
				id: 1
			},
			{
				name: 'Modern',
				url: 'views/template/t2.html',
				id: 2
			}
		];
		vm.announceClick = function (templateObject) {
			console.log(templateObject);
			vm.currentTemplate = templateObject;
		};


		vm.title = function () {
			var name = vm.resume.info.fullname || 'your_resume';
			var lowerName = name.toLowerCase();
			var underName = lowerName.replace(' ', '_');
			var fileName = underName + '_resume_' + new Date().getFullYear();
			return fileName;
		};

		vm.print = function () {
			$document[0].title = vm.title();
			window.print();
		};

		vm.createResume = function (resume) {
			api.postResume(resume)
				.then(function (response) {
					// $stateParams.id = response.message._id;
					console.log('createResume response: ', response.data.message._id);
					$state.go('main.resume', {
						id: response.data.message._id
					})
				}, function (error) {
					console.log('createResume error: ', error);
				})
		};

		vm.updateApiResume = function (resume) {
			if (resume._id) {
				console.log(vm.resumeId, resume);
				delete resume._id;
				api.updateResume(vm.resumeId, resume)
					.then(function (response) {
						vm.getApiResume(vm.resumeId);
					}, function (error) {
						console.log('error: ', error);
					});
			} else {
				vm.createResume(resume);
			}
		};

		vm.getApiResume = function (id) {
			api.getResume(id)
				.then(function (response) {
					vm.resume = response.data.data[0];
					$document[0].title = vm.title();
					if (!vm.resume.info) {
						vm.editResumeInfo();
					}
				}, function (error) {
					console.log('error: ', error);
					if (error.status === 404) {
						$state.go('main');
					}
				});
		};




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
		if (vm.resumeId) {
			vm.getApiResume(vm.resumeId);
		} else {
			$state.go('main');
			console.log('no resume id');
		}
	});
