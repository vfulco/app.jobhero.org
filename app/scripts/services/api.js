'use strict';

/**
 * @ngdoc service
 * @name appredomaycomApp.api
 * @description
 * # api
 * Service in the appredomaycomApp.
 */
angular.module('appredomaycomApp')
	.service('api', function ($http) {
		var urlBase = 'https://peaceful-reaches-46993.herokuapp.com/api';

		this.getResume = function (id) {
			return $http.get(urlBase + '/resume/' + id);
		};

		this.postResume = function (resume) {
			return $http.post(urlBase + '/resume', resume);
		};

		this.updateResume = function (resume) {
			return $http.put(urlBase + '/' + resume.id, resume);
		};

	});
