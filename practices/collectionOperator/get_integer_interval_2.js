'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var collection = [];
  if(number_a <= number_b){//根据给出的两个数字得到自增的偶数区间
    for(let i = number_a ; i <= number_b ; i ++){
      if(i % 2 == 0){
        collection.push(i);
      }
    }
  }else if(number_a >= number_b){//根据给出的两个数字得到自减的偶数区间
    for(let i = number_a ; i >= number_b ; i --){
      if(i % 2 == 0){
        collection.push(i);
      }
    }
  }else if(number_a = number_b){
    if((number_a % 2== 0) && (number_b % 2 == 0)){
      collection.push(number_a);
    }else{
      collection.push();
    }
  }
  console.log(collection);
  return collection;
}


module.exports = get_integer_interval_2;
