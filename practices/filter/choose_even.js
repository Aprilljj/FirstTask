'use strict';

function choose_even(collection) {
  //在这里写入代码
  let collection_result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(collection[i] % 2 == 0 ){
        collection_result.push(collection[i]);
    }    
  }
  console.log(collection_result);
  return collection_result;
}

module.exports = choose_even;
