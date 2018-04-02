'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  let collection_result = [];
  for(let i = 0 ; i < collection.length ; i ++){
    if(!collection_result.includes(collection[i])){
        collection_result.push(collection[i]);
    }
  }
  console.log(collection_result);
  return collection_result;
}

module.exports = choose_no_repeat_number;
