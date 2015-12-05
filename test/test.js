'use strict';

var assert = require('assert');
var vetrix = require('../vetrix');

describe('A 9 elements vector', function () {
  it('returns a 3x3 matrix', function () {
    assert.deepEqual(vetrix([1,2,3,4,5,6,7,8,9], 3), [[1,2,3],[4,5,6],[7,8,9]]);
  });
});
