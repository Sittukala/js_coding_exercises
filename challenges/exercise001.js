function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase()+word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
    return firstName.substring(0,1).toUpperCase()+"."+lastName.substring(0,1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vat = ((vatRate / 100) * originalPrice)
  return (+(originalPrice+vat).toFixed(2))
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let reduced = ((reduction / 100) * originalPrice)
  return (+(originalPrice - reduced).toFixed(2))
}


function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var position;
  var length;
  if(str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  }
  else{
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var reverse=""
for(var i=word.length-1;i>=0;i--){
 reverse= reverse+ word[i]
}

return reverse;

}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var reversed=[];
  words.forEach(word => {
    var reverse=""
    for(var i=word.length-1;i>=0;i--){
     reverse= reverse+ word[i]
    }
reversed.push(reverse);
  });
  return reversed;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var count=0;
  users.forEach(user => {
    if((user.type)=="Linux")
    count++;
  });
  return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let sum=0;
  let mean=0;
  for(var i=0;i<scores.length;i++){
    sum+=scores[i];
  }
  mean=sum/(scores.length)
  if(mean != "" && !isNaN(mean) && Math.round(mean) != mean){
   
    return +mean.toFixed(2);
  }
  else{
    
  return mean
  }
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
   if((n%3==0)&& (n%5==0)){
     return "fizzbuzz";
   }
   else if(n%3==0){
     return "fizz"
   }
   else if(n%5==0){
    return "buzz"
  }
  else{
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
