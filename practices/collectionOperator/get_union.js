'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  for(let i = 0 ; i < collection_b.length ;  i ++){
    if(!collection_a.includes(collection_b[i])){
      collection_a.push(collection_b[i]);
    }
  }
  console.log(collection_a);
  return collection_a;
}

module.exports = get_union;

