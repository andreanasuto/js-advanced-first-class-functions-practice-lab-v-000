// Code your solution in this file!
const print = function (object) {
  return console.log(object.name)
}

function logDriverNames (array) {
  return array.forEach(print)
}


function logDriversByHometown(array, location) {
  const newarray = array.filter(element => element.hometown == location)
  return newarray.forEach(print)
}

function driversByRevenue(array) {
  const newarray = [...array].sort(function (a, b) {
  return a.revenue - b.revenue;
  })
  return newarray
}
