'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  let collection = [];
  for(let i  = 0 ; i < collection_b.length ; i ++){
    if(collection_a.includes(collection_b[i])){
      collection.push(collection_b[i]);
    }
  }
  console.log(collection);
  return collection;
}

module.exports = get_intersection;
