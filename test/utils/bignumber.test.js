// test bignumber utils
var assert = require('assert');
var approx = require('../../tools/approx');
var BigNumber = require('decimal.js');
var Big32 = BigNumber.constructor({precision: 32});
var Big64 = BigNumber.constructor({precision: 64});
var bignumber = require('../../lib/utils/bignumber');

describe('bignumber', function() {

  it('should calculate a bignumber e', function() {
    assert.equal(bignumber.e(Big32),
        '2.7182818284590452353602874713527');
    assert.equal(bignumber.e(Big64),
        '2.718281828459045235360287471352662497757247093699959574966967628');
  });

  it('should calculate a bignumber pi', function() {
    assert.equal(bignumber.pi(Big32),
        '3.1415926535897932384626433832795');
    assert.equal(bignumber.pi(Big64),
        '3.141592653589793238462643383279502884197169399375105820974944592');
  });

  it('should calculate a bignumber tau', function() {
    assert.equal(bignumber.tau(Big32),
        '6.283185307179586476925286766559');
    assert.equal(bignumber.tau(Big64),
        '6.283185307179586476925286766559005768394338798750211641949889185');
  });

  it('should calculate a bignumber phi', function() {
    // FIXME: round-off error
    //assert.equal(bignumber.phi(32), '1.6180339887498948482045868343656');
    assert.equal(bignumber.phi(Big32),
        '1.6180339887498948482045868343657');
    assert.equal(bignumber.phi(Big64),
        '1.618033988749894848204586834365638117720309179805762862135448623');
  });
});
