'use strict';

/**
 * @ngdoc function
 * @name appredomaycomApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the appredomaycomApp
 */
angular.module('appredomaycomApp')
  .controller('StartCtrl', function ($state,api) {
    console.log('start controller!');
    var vm = this;

    vm.createApiResume = function (resume) {
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
