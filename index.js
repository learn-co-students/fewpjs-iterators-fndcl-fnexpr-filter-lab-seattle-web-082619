
function findMatching(array, desiredValue){
  return array.filter( name =>
    name.toLowerCase() === desiredValue.toLowerCase()
  )
}
// name is what is inside of the array compare that to the desired value


  // let toString = array.join()
  // //turn an array into one big string 
  // let lowerCase = toString.toLowerCase();
  // //lower case
  // let backToArray = lowerCase.split(" ");
  // //turn it back into an array split 
  // a pinch excessive 



function fuzzyMatch(drivers, string){
return drivers.filter(name =>   
  name.toLowerCase().indexOf(string.toLowerCase()) === 0)
}

function matchName(drivers, string){
  return drivers.filter(name => name.name === string)
  )
}