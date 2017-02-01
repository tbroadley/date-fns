var getUTCISOYear = require('../get_utc_iso_year/index.js')
var startOfUTCISOWeek = require('../start_of_utc_iso_week/index.js')

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
function startOfUTCISOYear (dirtyDate, options) {
  var year = getUTCISOYear(dirtyDate, options)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setUTCFullYear(year, 0, 4)
  fourthOfJanuary.setUTCHours(0, 0, 0, 0)
  var date = startOfUTCISOWeek(fourthOfJanuary, options)
  return date
}

module.exports = startOfUTCISOYear
