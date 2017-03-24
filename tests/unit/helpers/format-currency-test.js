
import { formatCurrency } from 'first-ember-project/helpers/format-currency';
import { module, test } from 'qunit';

module('Unit | Helper | format currency');

test('adds custom sign', function(assert) {
  let result = formatCurrency([42], {sign: '#'});
  assert.equal(result, '#0.42');
});

test('basic transformation', function(assert) {
  let result = formatCurrency([4283], {});
  assert.equal(result, '$42.83');
});

test('works without second param', function(assert) {
  let result = formatCurrency([3233]);
  assert.equal(result, '$32.33');
});


