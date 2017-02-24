'use strict';

/**
 * @ngdoc service
 * @name appredomaycomApp.verbs
 * @description
 * # verbs
 * Service in the appredomaycomApp.
 */
angular.module('appredomaycomApp')
	.service('verbs', function () {
		var pastTense = {
			"data": [
				'Advised',
				'Owned',
				'Designed',
				'Scheduled',
				'Made',
				'Grew',
				'Lead',
				'Managed',
				'Tracked',
				'Coordinated',
				'Improved',
				'Ensured',
				'Incubated',
				'Worked',
				'Developed',
				'Helped',
				'Created',
				'Solved',
				'Built'
			]
		};
		var presentTense = {
			"data": [
				'Managing',
				'Improving',
				'Growing',
				'Ensuring',
				'Coordinating',
				'Owning',
				'Designing',
				'Helping',
				'Tracking',
				'Solving',
				'Scheduling',
				'Making',
				'Working',
				'Leading',
				'Incubating',
				'Developing',
				'Advising',
				'Creating',
				'Building'
			]
		};


		return {
			pastTense: pastTense,
			presentTense: presentTense
		};
	});
