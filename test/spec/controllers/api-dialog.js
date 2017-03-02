'use strict';

describe('Controller: ApiDialogCtrl', function () {

  // load the controller's module
  beforeEach(module('appredomaycomApp'));

  var ApiDialogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiDialogCtrl = $controller('ApiDialogCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApiDialogCtrl.awesomeThings.length).toBe(3);
  });
});
