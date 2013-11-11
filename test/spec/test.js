/*global describe, it */
var expect = require('chai').expect

'use strict';
(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
              expect([1,2,3].length).to.equal(3);
            });
        });
    });
})();
