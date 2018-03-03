// Code your solution in this file!
const print = function (object) {
  return console.log(object.name)
}

function logDriverNames (array) {
  return array.forEach(print)
}


function logDriversByHometown(array, location) {
  const newarray = array.map(element => element.hometown == location)
  return newarray.forEach(print)
}
