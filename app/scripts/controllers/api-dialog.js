'use strict';

/**
 * @ngdoc function
 * @name appredomaycomApp.controller:ApiDialogCtrl
 * @description
 * # ApiDialogCtrl
 * Controller of the appredomaycomApp
 */
angular.module('appredomaycomApp')
	.controller('ApiDialogCtrl', function ($mdDialog, $stateParams, $location, verbs, $element, api) {

		var ad = this;
		ad.pastVerbs = verbs.pastTense.data.sort();
		ad.presentVerbs = verbs.presentTense.data.sort();
		ad.resume = {};
		ad.resume.info = {};
		ad.resume.experience = [];
		ad.resume.technology = [];
		ad.resumeId = $stateParams.id;
		ad.loading = true;

		ad.updateApiResume = function (resume) {
			delete resume._id;
			api.updateResume(ad.resumeId, resume)
				.then(function (response) {
					ad.getApiResume(ad.resumeId);
				}, function (error) {
					console.log('error: ', error);
				});
		};

		ad.getApiResume = function (id) {
			api.getResume(id)
				.then(function (response) {
					ad.resume = response.data.data[0];
					ad.loading = false;
					if (!ad.resume.info) {
						ad.editResumeInfo();
					}
				}, function (error) {
					console.log('error: ', error);
				});
		};

		if (ad.resumeId) {
			ad.getApiResume(ad.resumeId);
		} else {
			console.log('no resume id');
			ad.loading = false;
		}

		ad.saveResume = function (resume, hide) {
			console.log(ad.resumeId, resume);
			if (hide === true) {
				$mdDialog.hide(resume);
			} else {
				ad.updateApiResume(resume);
			}
		};

		ad.searchTerm = '';
		ad.bannedCodes = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, , 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 121, 123, 144, 145];
		ad.clearSearchTerm = function () {
			ad.searchTerm = '';
		};

		ad.updateSearch = function (e) {
			e.stopPropagation();
			if (ad.bannedCodes.indexOf(e.keyCode) < 0) {
				if (e.keyCode == 8) {
					ad.formData.searchTerm = ad.formData.searchTerm.substring(1, ad.formData.searchTerm.length - 1);
				}
			}
		};


		ad.newExperience = function () {
			if (ad.resume.experience) {
				ad.resume.experience.push({
					name: '',
					years: ''
				});
			} else {
				ad.resume.experience = [];
				ad.resume.experience.push({
					name: '',
					years: ''
				});
			}
			console.log('save resume: ', ad.resume);
			ad.saveResume(ad.resume, false);
		};

		ad.newTechnology = function () {
			if (ad.resume.technology) {
				ad.resume.technology.push({
					name: ''
				});
			} else {
				ad.resume.technology = [];
				ad.resume.technology.push({
					name: ''
				});
			}
			ad.saveResume(ad.resume, false);
		};

		ad.newSkill = function () {
			if (ad.resume.skills) {
				ad.resume.skills.push({
					name: ''
				});
			} else {
				ad.resume.skills = [];
				ad.resume.skills.push({
					name: ''
				});
			}
			ad.saveResume(ad.resume, false);
		};

		ad.newEducationInterest = function () {
			if (ad.resume.educationinterests) {
				ad.resume.educationinterests.push({
					name: ''
				});
			} else {
				ad.resume.educationinterests = [];
				ad.resume.educationinterests.push({
					name: ''
				});
			}
			ad.saveResume(ad.resume, false);
		};

		ad.newHistory = function () {
			if (ad.resume.history) {
				ad.resume.history.push({
					company: '',
					highlights: []
				});
			} else {
				ad.resume.history = [];
				ad.resume.history.push({
					company: '',
					highlights: []
				});
			}
			ad.saveResume(ad.resume, false);
		};

		ad.newHistoryHighlight = function (item) {
			var index = ad.resume.history.indexOf(item);
			if (ad.resume.history[index].highlights) {
				console.log('localStorageService.get');
				ad.resume.history[index].highlights.push({
					name: ''
				});
			} else {
				ad.resume.history[index].highlights = [];
				ad.resume.history[index].highlights.push({
					name: ''
				});
			}
			ad.saveResume(ad.resume, false);
		};

		ad.removeExperience = function (item) {
			var index = ad.resume.experience.indexOf(item);
			ad.resume.experience.splice(index, 1);
		};

		ad.removeTechnology = function (item) {
			var index = ad.resume.technology.indexOf(item);
			ad.resume.technology.splice(index, 1);
		};

		ad.removeSkill = function (item) {
			var index = ad.resume.skills.indexOf(item);
			ad.resume.skills.splice(index, 1);
		};

		ad.removeEducationInterest = function (item) {
			var index = ad.resume.educationinterests.indexOf(item);
			ad.resume.educationinterests.splice(index, 1);
		};

		ad.removeHistory = function (item) {
			var index = ad.resume.history.indexOf(item);
			ad.resume.history.splice(index, 1);
		};

		ad.removeHistoryHighlight = function (history, item) {
			console.log('history', history);
			var historyIndex = ad.resume.history.indexOf(history);
			var highlightIndex = ad.resume.history[historyIndex].highlights.indexOf(item);
			ad.resume.history[historyIndex].highlights.splice(highlightIndex, 1);
		};

		ad.hide = function () {
			$mdDialog.hide();
		};

		ad.cancel = function () {
			$mdDialog.cancel();
		};

	});
