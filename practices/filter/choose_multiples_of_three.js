'use strict';

function choose_multiples_of_three(collection) {

  //在这里写入代码
  let collection_result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 3 ==0 ){
      collection_result.push(collection[i]);
    }
  }
  console.log(collection_result);
  return collection_result;
}

module.exports = choose_multiples_of_three;
