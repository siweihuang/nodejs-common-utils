/** UUID.js */

'use strict';

var moment = require('moment');
const uuidv1 = require('uuid/v1');

var uuidRandom = uuidv1();
console.log(uuidRandom);

var uuidRandomWithoutHash = uuidRandom.replace(/[\-]/g,'');
console.log(uuidRandomWithoutHash);
