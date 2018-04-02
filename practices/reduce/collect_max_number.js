'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  let max_num = 0;
  for(let i = 0 ; i < collection.length - 1; i ++){
    if(collection[i] >= collection[i + 1]){
        max_num = collection[i];
    }else{
      max_num = collection[i+1];
    }
  }
  console.log(max_num);
  
  return max_num;
}

module.exports = collect_max_number;
