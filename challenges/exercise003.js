function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  result = []
  nums.forEach(num => {
    result.push(num*num)
  });

  return result
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var camelCased="";
  for(var i=0;i<words.length;i++){
    if(i==0){
      
   camelCased+=words[i];
  
    }
    else{
      camelCased=camelCased+words[i].substring(0,1).toUpperCase()+words[i].substring(1,words[i].length)
     
    }
  }
  return camelCased
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var count=0;
  people.forEach(person => {
     count += person.subjects.length;
  });
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  flag = false;
  menu.forEach(item => {
    var ingredients = item.ingredients;
    ingredients.forEach(element => {
      if(element==ingredient){
        flag=true;
      }
    });
  });
  return flag;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  var res=[];
   arr1.forEach(element_arr1 => {
     arr2.forEach(element_arr2 => {
       if(element_arr1 == element_arr2){
       if(!res.includes(element_arr2)){
        res.push(element_arr2)
       }
      
      }
     });
   });
   
return res.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
