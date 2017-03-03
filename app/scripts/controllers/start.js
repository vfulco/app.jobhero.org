'use strict';

/**
 * @ngdoc function
 * @name appredomaycomApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the appredomaycomApp
 */
angular.module('appredomaycomApp')
  .controller('StartCtrl', function ($state,$document,api) {
    console.log('start controller!');
    var vm = this;
    $document[0].title = 'Create better resumes';
    vm.buttonContent = 'Build a better resume';
    vm.loading = false;

    vm.createApiResume = function (resume) {
      vm.loading = true;
      vm.buttonContent = 'Starting resume builder...';
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

    vm.createResume = function(resume){
      console.log('creating resume',resume);
      vm.createApiResume(resume);
    };
  });
