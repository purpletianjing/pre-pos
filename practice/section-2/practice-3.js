function findEle(ele,result) {
  var temp = 1;
  var sum = 0;
    for (var i = 0; i < result.length; i++) {
    if(ele[0] === result[i].name) {
      if(ele.length > 1) {
        if(ele.length > 3) {
          for(var k = ele.length - 2;k >= 2;k--) {
            sum =sum + temp * parseInt(ele[k]);
            temp = temp * 10;
          }
          result[i].summary += sum;
          return;
        }
        result[i].summary += parseInt(ele[2]);
        return;
      }
      result[i].summary++;
      return;
    }
  }
  if(ele.length > 1) {
    result.push({name:ele[0],summary:parseInt(ele[2])});
    return;
  }
  result.push({name:ele,summary:1});
}
function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length;i++) {
    findEle(collection[i],result);
  }
  return result;
}
count_same_elements(collection);
