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
			"data": [{
					"id": 0,
					"name": "You Led a Project",
					"verbs": [
						"Chaired",
						"Controlled",
						"Executed",
						"Headed",
						"Operated",
						"Orchestrated",
						"Organized",
						"Oversaw",
						"Planned",
						"Programmed",
						"Commissioned",
						"Collaborated",
						"Managed"
					]
				},
				{
					"id": 1,
					"name": "You Brought Life to a Project",
					"verbs": [
						"Administered",
						"Built",
						"Charted",
						"Created",
						"Designed",
						"Developed",
						"Devised",
						"Founded",
						"Engineered",
						"Established",
						"Formalized",
						"Formed",
						"Formulated",
						"Implemented",
						"Incorporated",
						"Initiated",
						"Instituted",
						"Introduced",
						"Launched",
						"Pioneered",
						"Spearheaded"
					]
				},
				{
					"id": 2,
					"name": "You Saved the Company Time or Money",
					"verbs": [
						"Conserved",
						"Consolidated",
						"Decreased",
						"Deducted",
						"Diagnosed",
						"Lessened",
						"Reconciled",
						"Reduced",
						"Yielded"
					]
				},
				{
					"id": 3,
					"name": "You Increased Sales or Efficiency",
					"verbs": [
						"Accelerated",
						"Achieved",
						"Advanced",
						"Amplified",
						"Boosted",
						"Capitalized",
						"Delivered",
						"Enhanced",
						"Expanded",
						"Expedited",
						"Furthered",
						"Gained",
						"Generated",
						"Improved",
						"Lifted",
						"Maximized",
						"Outpaced",
						"Stimulated",
						"Sustained"
					]
				},
				{
					"id": 4,
					"name": "You Changed or Improved Something",
					"verbs": [
						"Centralized",
						"Clarified",
						"Converted",
						"Customized",
						"Influenced",
						"Integrated",
						"Merged",
						"Modified",
						"Overhauled",
						"Redesigned",
						"Refined",
						"Refocused",
						"Rehabilitated",
						"Remodeled",
						"Reorganized",
						"Replaced",
						"Restructured",
						"Revamped",
						"Revitalized",
						"Simplified",
						"Standardized",
						"Streamlined",
						"Stengthened",
						"Updated",
						"Upgraded",
						"Transformed"
					]
				},
				{
					"id": 5,
					"name": "You Managed a Team",
					"verbs": [
						"Aligned",
						"Cultivated",
						"Directed",
						"Enabled",
						"Facilitated",
						"Fostered",
						"Guided",
						"Hired",
						"Inspired",
						"Mentored",
						"Mobilized",
						"Motivated",
						"Recruited",
						"Regulated",
						"Shaped",
						"Supervised",
						"Taught",
						"Trained",
						"Unified",
						"United"
					]
				},
				{
					"id": 6,
					"name": "You Brought in Resources",
					"verbs": [
						"Advised",
						"Advocated",
						"Arbitrated",
						"Coached",
						"Consulted",
						"Educated",
						"Fielded",
						"Informed",
						"Resolved"
					]
				},
				{
					"id": 7,
					"name": "You Did Awesome Research",
					"verbs": [
						"Analyzed",
						"Assembled",
						"Assessed",
						"Audited",
						"Calculated",
						"Discovered",
						"Evaluated",
						"Examined",
						"Explored",
						"Forecasted",
						"Indentified",
						"Interpreted",
						"Investigated",
						"Mapped",
						"Measured",
						"Qualified",
						"Quantified",
						"Surveyed",
						"Tested",
						"Tracked"
					]
				},
				{
					"id": 8,
					"name": "You Communicated",
					"verbs": [
						"Authored",
						"Briefed",
						"Campaigned",
						"Co-authored",
						"Composed",
						"Conveyed",
						"Convinced",
						"Corresponded",
						"Counseled",
						"Critiqued",
						"Defined",
						"Documented",
						"Edited",
						"Illustrated",
						"Lobbied",
						"Persuaded",
						"Promoted",
						"Publicized",
						"Reviewed"
					]
				},
				{
					"id": 9,
					"name": "You Oversaw",
					"verbs": [
						"Authorized",
						"Blocked",
						"Delegated",
						"Dispatched",
						"Enforced",
						"Ensured",
						"Inspected",
						"Itemized",
						"Monitored",
						"Screened",
						"Scrutinized",
						"Verified"
					]
				},
				{
					"id": 10,
					"name": "You Achieved Something",
					"verbs": [
						"Attained",
						"Awarded",
						"Completed",
						"Demonstrated",
						"Earned",
						"Exceeded",
						"Outperformed",
						"Reached",
						"Showcased",
						"Succeeded",
						"Surpassed",
						"Targeted"
					]
				}
			]
		};

		var presentTense = {
			"data": [{
				"id": 0,
				"name": "What You Are Good At",
				"verbs": [
					"Managing",
					"Improving",
					"Growing",
					"Ensuring",
					"Coordinating",
					"Owning",
					"Designing",
					"Helping",
					"Tracking",
					"Solving",
					"Scheduling",
					"Making",
					"Working",
					"Leading",
					"Incubating",
					"Developing",
					"Advising",
					"Creating",
					"Building",
					"Implementing",
					"Discovering"
				]
			}]
		};


		return {
			pastTense: pastTense,
			presentTense: presentTense
		};
	});
