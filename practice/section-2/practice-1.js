function findEle(ele,result) {
  for (var i = 0; i < result.length; i++) {
    if(ele === result[i].key) {
      result[i].count++;
      return;
    }
  }
  result.push({key:ele,count:1});
}
function count_same_elements(collection) {
  var result = [];
  for (var i = 0; i < collection.length;i++) {
    findEle(collection[i],result);
  }
  return result;
}
count_same_elements(collection);
