

// 1 Invalid Date
// 2 ✅ 1970-01-01T00:00:00.000Z // The string "0" is interpreted as the year 2000, not as a timestamp!
// 3 Throws an error
// 4 2000-01-01T00:00:00.000Z
// console.log(new Date("0"));



// 1 2000-01-01T00:00:00.000Z
// 2 ✅ 1970-01-01T00:00:00.000Z // The number 0, as opposed to the string "0", is interpreted as milliseconds since the Unix epoch (Jan 1, 1970).
// 3 Throws an error
// 4 Invalid Date
// console.log(new Date(0));


// 1 false
// 2 undefined
// 3 Throws an error
// 4 ✅ true // Both parse to 946684800000 milliseconds! Date.parse only operates on strings, so 0 is coerced to the string "0".
// console.log(Date.parse(0) === Date.parse("0"));


// 1 ✅ Invalid Date // Invalid Date is still a Date object! It's not null or an error.
// 2 undefined
// 3 null
// 4 Throws an error
// console.log(new Date("not a date"));


// 1 0
// 2 Throws an error
// 3 ✅ NaN // Invalid Date objects return NaN for getTime(). This function returns the number of milliseconds since the Unix epoch for valid dates.
// 4 null
// console.log(new Date("not a date").getTime());


// 1 null
// 2 ✅ Throws an error // toISOString() throws a RangeError on Invalid Date objects.
// 3 NaN
// 4 "Invalid Date"
// console.log(new Date("not a date").toISOString());


// 1 ""
// 2 null
// 3 Throws an error
// 4 ✅ "Invalid Date" // toTimeString() returns the string "Invalid Date" for invalid dates. 🫠
// console.log(new Date("not a date").toTimeString());


// 1 ✅ 2001-01-01T00:00:00.000Z // Unlike "0", "1" is interpreted as a month, and the year defaults to 2001 for some reason.
// 2 Invalid Date
// 3 1970-01-01T00:00:01.000Z
// 4 0001-01-01T00:00:00.000Z
// console.log(new Date("1"));


// 1 2002-01-01T00:00:00.000Z
// 2 2001-01-02T00:00:00.000Z
// 3 ✅ 2001-02-01T00:00:00.000Z // "2" is interpreted as February 2001 (month 2), as you might expect from the previous question.
// 4 Invalid Date
// console.log(new Date("2"));


// 1 2001-01-12T00:00:00.000Z
// 2 ✅ 2001-12-01T00:00:00.000Z // Also works for December.
// 3 2012-01-01T00:00:00.000Z
// 4 Invalid Date
// console.log(new Date("12"));


// 1 2013-01-01T00:00:00.000Z
// 2 2001-13-01T00:00:00.000Z
// 3 2001-01-13T00:00:00.000Z
// 4 ✅ Invalid Date // "13" would be month 13, which doesn't exist, so it's Invalid Date.
// console.log(new Date("13"));


// 1 false
// 2 Throws an error
// 3 NaN
// 4 ✅ true // "99" is year 1999, while "100" is year 0100. 1999 > 0100! Date starts interpreting numbers as years starting at "32".
// console.log(new Date("99") > new Date("100"));


// 1 Throws an error
// 2 false
// 3 ✅ true // And for some reason "32" to "49" is 2032-2049, while "50" onwards is 1950+. So 2049 > 1950!
// 4 NaN
// console.log(new Date("49") > new Date("50"));


// 1 ✅ 2001-12-01T00:00:00.000Z // "12.1" is interpreted as the date December 1st, and as before for dates with no year the default is 2001 because of course.
// 2 Invalid Date
// 3 2012-01-01T00:00:00.000Z
// 4 2001-01-01T00:00:00.000Z
// console.log(new Date("12.1"));


// 1 2001-01-12T00:00:00.000Z
// 2 2001-12-01T00:00:00.000Z
// 3 ✅Invalid Date // The .0 is still interpreted as a day, and no month has a 0th day, so this is considered invalid.
// 4 2012-01-01T00:00:00.000Z
// console.log(new Date("12.0"));


// 1 ✅ 2001-12-01T00:00:00.000Z // The dash here is ignored, so this is interpreted the same as "12.1".
// 2 Invalid Date
// 3 2012-01-01T00:00:00.000Z
// 4 2001-01-01T00:00:00.000Z
// console.log(new Date("12.-1"));



// 1 ✅ 2001-01-01T00:00:00.000Z // Leading text is always ignored! It finds the "1" and parses it as the month January.
// 2 Throws an error
// 3 Invalid Date
// 4 1970-01-01T00:00:01.000Z
// console.log(new Date("perhaps 1"));



// 1 Throws an error
// 2 1970-01-01T00:00:01.000Z
// 3 ✅ Invalid Date // But you can't just have text! It needs a number to parse, so this is Invalid Date. It's equivalent to new Date("").
// 4 2001-01-01T00:00:00.000Z
// console.log(new Date("perhaps"));



// 1 2001-01-01T00:00:00.000Z
// 2 2001-05-01T00:00:00.000Z
// 3  ✅2001-04-30T23:00:00.000Z // "may" in "maybe" is parsed as the month May! And for some reason this expression cares about your local timezone, which happens to be BST for me right now.
// 4 Invalid Date
// console.log(new Date("maybe 1"));


// 1 2010-05-01T00:00:00.000Z
// 2 Invalid Date
// 3 ✅ 2010-04-30T23:00:00.000Z // "fourth of" is ignored, this is just parsing "may 2010" and again local timezone is important.
// 4 2010-05-04T00:00:00.000Z
// console.log(new Date("fourth of may 2010"));


// 1 Invalid Date
// 2 2010-04-30T23:00:00.000Z
// 3 ✅ 2001-05-04T00:00:00.000Z // UTC is correctly parsed as a timezone.
// 4 2010-05-01T00:00:00.000Z
// console.log(new Date("May 4 UTC"));


// 1 ✅ 2001-05-03T23:00:00.000Z // You can add modifiers to timezones and it works as you would expect.
// 2 2010-05-01T00:00:00.000Z
// 3 2001-05-04T00:00:00.000Z
// 4 Invalid Date
// console.log(new Date("May 4 UTC+1"));



// 1 Throws an error
// 2 Invalid Date
// 3 2001-05-04T00:00:00.000Z
// 4 ✅ 2001-05-03T22:01:00.000Z // It also supports minutes!
// console.log(new Date("May 4 UTC+1:59"));


// 1 2001-05-03T22:00:00.000Z
// 2 2001-05-04T00:00:00.000Z
// 3 1960-05-03T23:00:00.000Z // Until it doesn't! 60 is being parsed as the year here, UTC+1 is the timezone.
// 4 Invalid Date
// console.log(new Date("May 4 UTC+1:60"));


// 1 2000-01-01T00:00:00.000Z
// 2 ✅ Invalid Date // No tricks here, just a plain ol' Invalid Date.
// 3 1990-01-01T00:00:00.000Z
// 4 2010-01-01T00:00:00.000Z
// console.log(new Date("1990 2010"));


// 1 2010-01-01T00:00:00.000Z
// 2 2000-01-01T00:00:00.000Z
// 3 ✅ 1990-01-01T00:00:00.000Z // For some reason, parenthesised text is ignored.
// 4 Invalid Date
// console.log(new Date("1990 (2010)"));


// 1 2000-01-01T00:00:00.000Z
// 2 1990-01-01T00:00:00.000Z
// 3 ✅ 2010-01-01T00:00:00.000Z // No matter where it is.
// 4 Invalid Date
// console.log(new Date("(1990) 2010"));


// 1 Throws an error
// 2 Invalid Date
// 3 2000-01-01T00:00:00.000Z
// 4 ✅ 1970-01-01T00:00:00.000Z // I couldn't resist. -[] is coerced to 0, which is interpreted as milliseconds since the Unix epoch (Jan 1, 1970).
// console.log(new Date(-[]));








