'use strict';

describe('Service: verbs', function () {

  // load the service's module
  beforeEach(module('appredomaycomApp'));

  // instantiate service
  var verbs;
  beforeEach(inject(function (_verbs_) {
    verbs = _verbs_;
  }));

  it('should do something', function () {
    expect(!!verbs).toBe(true);
  });

});
