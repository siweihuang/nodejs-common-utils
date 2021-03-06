/** MomentTime.js */
'use strict'

var moment = require('moment')

// Get UnixTimestamp in second
var EpochUnixTimestamp = Math.floor(moment().valueOf()/1000)
console.log("EpochUnixTimestamp:" + EpochUnixTimestamp)

// Convert UnixTimestamp to Hour and Minute
var dayHour = moment.unix(1545101624).format('HH:mmA')
console.log("dayHour:" + dayHour)

// Convert Timestamp string to year month day
var capturedTime = moment("2019-03-12 16:34:09").format('YYYYMMDD')
console.log("capturedTime:" + capturedTime)

// Convert Timestamp string to UnixTimestamp
var capturedEpochUnixTimestamp = moment("2019-03-12 16:34:09").unix()
console.log("capturedEpochUnixTimestamp:" + capturedEpochUnixTimestamp)

// Get today year month day
var todayDateString = moment().format('YYYY-MM-DD')
console.log("todayDateString:" + todayDateString)

// Get today year month day to UnixTimestamp
var todayDateStringUnix = moment(moment().format('YYYY-MM-DD')).unix()
console.log("todayDateStringUnix:" + todayDateStringUnix)

// Get yesterday year month day
var yesterdatDateString = moment().subtract(1, 'd').format('YYYY-MM-DD')
console.log("yesterdatDateString:" + yesterdatDateString)

// Get week day short name
var weekDayNameShort =  moment().format('ddd');
console.log("weekDayNameShort:" + weekDayNameShort);

// Get week day full name
var weekDayName =  moment().format('dddd');
console.log("weekDayName:" + weekDayName);

// Gets the day of the week. Sunday as 0 and Saturday as 6
console.log("Day of week: " + moment().weekday());
console.log("Day of month: " + moment().date());
console.log("Day of year: " + moment().dayOfYear());
console.log("Week of year: " + moment().week());
console.log("Quarter of year: " + moment().quarter());
console.log("Weeks in year: " + moment().weeksInYear());
