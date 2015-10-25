import { hash } from '../../../helpers/hash';
import { module, test } from 'qunit';

module('Unit | Helper | hash');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = hash([], { foo: 'bar' });
  assert.equal(result.foo, 'bar');
});
