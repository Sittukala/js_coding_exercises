function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  var result=[]
  nums.forEach(num => {
    if(num<1){
      result.push(num)
    }
  });
  return result;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  var result=[]
  names.forEach(name => {
    if(name.charAt(0)==char){
      result.push(name)
    }
  });
  return result;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var result=[]
  words.forEach(word => {
    if(word.startsWith("to ")){
      result.push(word)
    }
  });
  return result;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  var result=[]
  nums.forEach(num => {
   if(Number.isInteger(num)){
     result.push(num)
   }
  });
  
   return result;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  var result=[]
  users.forEach(user => {
    result.push(user.data.city.displayName)

  });
  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  var result=[]
  nums.forEach(num => {
  result.push(+Math.sqrt(num,2).toFixed(2))
  });
  
  return result;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  var result=[]
  sentences.forEach(sentence => {
    sent=sentence.toLowerCase();
    if(sent.includes(str.toLowerCase())){
      result.push(sentence)
    }
  });

  return result;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  var result=[]
  triangles.forEach(triangle => {
    console.log(triangle.sort())
   
    result.push(triangle[length-1])
  });
 
  return result;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
