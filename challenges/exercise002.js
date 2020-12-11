function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
   if(person.city == "Manchester"){
     return true;
   }
   else{
     return false;
   }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if(people % 40 == 0 ){
    let buses = Math.floor(people/40);
    console.log("ans" + buses  + " " + people)
    return buses;
 
  }
 else{
   let buses = Math.floor(people/40) + 1;
   console.log("ans" + buses  + " " + people)
   return buses;

 }
  
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  var count=0;
  arr.forEach(element => {
    if(element == "sheep"){
      count++;
    }
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
   if((person.address.postCode.startsWith("M",0)) && (person.address.city =="Manchester")){
     return true;
   }
   else{
     return false
   }
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
