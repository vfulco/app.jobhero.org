'use strict';

/**
 * @ngdoc function
 * @name appredomaycomApp.controller:DialogCtrl
 * @description
 * # DialogCtrl
 * Controller of the appredomaycomApp
 */
angular.module('appredomaycomApp')
	.controller('DialogCtrl', function ($mdDialog, localStorageService, $location) {

		this.resume = localStorageService.get('resume');

		this.saveResume = function (resume, hide) {
			console.log(resume);
			localStorageService.set('resume', resume);
			$location.search({
				resume: encodeURIComponent(JSON.stringify(resume))
			});
			if (hide === true) {
				$mdDialog.hide(resume);
			}
		};

		this.newExperience = function () {
			if (localStorageService.get('resume').experience) {
				this.resume.experience.push({
					name: '',
					years: ''
				});
			} else {
				this.resume.experience = [];
				this.resume.experience.push({
					name: '',
					years: ''
				});
			}
			this.saveResume(this.resume, false);
		};

		this.newTechnology = function () {
			if (localStorageService.get('resume').technology) {
				this.resume.technology.push({
					name: ''
				});
			} else {
				this.resume.technology = [];
				this.resume.technology.push({
					name: ''
				});
			}
			this.saveResume(this.resume, false);
		};

		this.newSkill = function () {
			if (localStorageService.get('resume').skills) {
				this.resume.skills.push({
					name: ''
				});
			} else {
				this.resume.skills = [];
				this.resume.skills.push({
					name: ''
				});
			}
			this.saveResume(this.resume, false);
		};

		this.newEducationInterest = function () {
			if (localStorageService.get('resume').educationinterests) {
				this.resume.educationinterests.push({
					name: ''
				});
			} else {
				this.resume.educationinterests = [];
				this.resume.educationinterests.push({
					name: ''
				});
			}
			this.saveResume(this.resume, false);
		};

		this.newHistory = function () {
			if (localStorageService.get('resume').history) {
				this.resume.history.push({
					company: '',
					highlights: []
				});
			} else {
				this.resume.history = [];
				this.resume.history.push({
					company: '',
					highlights: []
				});
			}
			this.saveResume(this.resume, false);
		};

		this.newHistoryHighlight = function (item) {
			var index = this.resume.history.indexOf(item);
			if (localStorageService.get('resume').history[index].highlights) {
				console.log('localStorageService.get');
				this.resume.history[index].highlights.push({
					name: ''
				});
			} else {
				this.resume.history[index].highlights = [];
				this.resume.history[index].highlights.push({
					name: ''
				});
			}
			this.saveResume(this.resume, false);
		};

		this.removeExperience = function (item) {
			var index = this.resume.experience.indexOf(item);
			this.resume.experience.splice(index, 1);
		};

		this.removeTechnology = function (item) {
			var index = this.resume.technology.indexOf(item);
			this.resume.technology.splice(index, 1);
		};

		this.removeSkill = function (item) {
			var index = this.resume.skills.indexOf(item);
			this.resume.skills.splice(index, 1);
		};

		this.removeEducationInterest = function (item) {
			var index = this.resume.educationinterests.indexOf(item);
			this.resume.educationinterests.splice(index, 1);
		};

		this.removeHistory = function (item) {
			var index = this.resume.history.indexOf(item);
			this.resume.history.splice(index, 1);
		};

		this.removeHistoryHighlight = function (history, item) {
			console.log('history', history);
			var historyIndex = this.resume.history.indexOf(history);
			var highlightIndex = this.resume.history[history].highlights.indexOf(item);
			this.resume.history[history].highlights.splice(highlightIndex, 1);
		};

		this.hide = function () {
			$mdDialog.hide();
		};

		this.cancel = function () {
			$mdDialog.cancel();
		};

	});
