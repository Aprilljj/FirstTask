'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
  let location = 0;
  for(let i  = 0 ; i < collection.length ; i ++){
    if(collection[i] == element){
      location = i ;
      break;
    }
  }
  console.log(location);
  return location ;
}

module.exports = calculate_elements_sum;

