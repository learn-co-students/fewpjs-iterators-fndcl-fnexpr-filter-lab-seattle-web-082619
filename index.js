// Code your solution here
function findMatching(array, match) {
  return array.filter( driver => driver.toUpperCase() === match.toUpperCase() )
}

function fuzzyMatch(array, match) {
  return array.filter(driver => driver.slice(0, match.length) === match)
}

function matchName(object, match) {
  return object.filter( driver => driver.name === match)
}