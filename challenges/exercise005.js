const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  var result=[]
  for(var i=0;i<nums.length;i++){
    if(!nums.includes(n)){
      return null;
    }
   
    else if(nums[i]==n){
      if(i==nums.length-1){
      return null;
      }
      else{
        return nums[i+1]
      }
    }
  }
}

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  binary =str.split("")
  count0s1s ={1 : 0 , 0 : 0}
 
  binary.forEach(element => {
    if(element=='0')
    count0s1s[0]++
    else{
      count0s1s[1]++
    }
  
  });
 
  return count0s1s
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  var number="" + n;
  var reversed;
  var reverse=""
  for(var i=number.length-1;i>=0;i--){
    reverse= reverse+ number[i]
   }
   reversed=+reverse;
  
   return reversed
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  var result=0;
  arrs.forEach(arr => {
    arr.forEach(element => {
      result+=element
    });
  });
  
  return result
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
 if(arr.length!=0){
  temp=arr[0];
 
  arr[0]=arr[arr.length-1]
  arr [arr.length-1]=temp;
 
  return arr
 }
 else{
   arr=[]
   return arr
 }
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  let value = Object.values(haystack);
  let result=[]
  value.forEach(val => {
    if(typeof(val) === "string"){
    result.push(val.toLowerCase())
    
    }
    else{
      result.push(val)
    }
  });
 
  if (result.includes(searchTerm.toLowerCase())) {
    return true
    }
     else{
      return false;
    }

 

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  str =str.toLowerCase()
  str=str.replace(/[^a-zA-Z ]/g, "");
  split = str.split(" ");
  let obj = {};

for (var i = 0; i < split.length; i++) {

if (obj[split[i]] === undefined) {
  obj[split[i]] = 1;
} else {
  obj[split[i]]++;
}
}

console.log(obj)
  
return obj
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

