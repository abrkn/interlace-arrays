# interlace-arrays

[![Build Status](https://travis-ci.org/abrkn/interlace-arrays.svg?branch=master)](https://travis-ci.org/abrkn/interlace-arrays)

Interlace arrays

```javascript
$ node
var interlace = require('interlace-arrays');
var odd = [1, 3, 5, 7, 9];
var even = [2, 4, 6, 8, 10, 12];
var interlaced = interlace([odd, even]);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12 ]
```
