/** UniqueID_Internal.js */
'use strict'

// A prefixed, random alphanumeric identifier of varying length
// For instance, a user ID will have the prefix usr, and have 16 characters, e.g. usr_ZNrnnD2tF5m024ZU

// Source String used when generating a random identifier.
const idSource = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

// This function generates random integer between two numbers low (inclusive) and high (inclusive) ([low, high])
function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
}

// GenerateIDWithoutPrefix creates a random identifier
function GenerateIDWithoutPrefix(length) {
    var GeneratedID = '';
    var RandomID = '';

    for (let i = 0; i < length; i++){
        var randomIndex = randomIntInc(0, idSource.length - 1);
        RandomID += idSource[randomIndex];
    }
    GeneratedID = RandomID;
    return GeneratedID;
}

// GenerateID creates a prefixed random identifier
function GenerateID(prefix, length) {
    var GeneratedID = '';
    var RandomID = '';

    for (let i = 0; i < length; i++){
        var randomIndex = randomIntInc(0, idSource.length - 1);
        RandomID += idSource[randomIndex];
    }
    GeneratedID = prefix + '_' + RandomID;
    return GeneratedID;
}

var UniqueID_Set1 = 'usr_' + GenerateIDWithoutPrefix(16);
console.log(UniqueID_Set1);

var UniqueID_Set2 = GenerateID('usr', 16);
console.log(UniqueID_Set2);
