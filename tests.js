var test = require('tape');
var interlace = require('./');

test('interlace one array', function(t) {
  var one = ['bit', 'coin'];

  var actual = interlace([one]);
  var expected = ['bit', 'coin'];

  t.deepEqual(actual, expected);
  t.end();
});

test('interlace two arrays', function(t) {
  var odd = [1, 3, 5, 7, 9];
  var even = [2, 4, 6, 8, 10, 12];

  var actual = interlace([odd, even]);
  var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

  t.deepEqual(actual, expected);
  t.end();
});

test('interlace three arrays', function(t) {
  var one = ['satoshi'];
  var two = ['wei', 'peter'];
  var three = ['roger', 'nick', 'erik'];

  var actual = interlace([one, two, three]);
  var expected = ['satoshi', 'wei', 'roger', 'peter', 'nick', 'erik'];

  t.deepEqual(actual, expected);
  t.end();
});
