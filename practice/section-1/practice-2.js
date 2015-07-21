/*function judgeEle(ele,collection_b) {
  for (var i = 0; i < collection_b.length; i++) {
    for (var k = 0; k < collection_b[i].length; k++) {
      if(ele === collection_b[i][k])  {
        return ele;
      }
    }
  }
}
function collect_same_elements(collection_a, collection_b) {
  var result = [];
  var temp;
  for (var i = 0; i < collection_a.length; i++) {
    temp = judgeEle(collection_a[i],collection_b);
    if(temp !== undefined)  {
      result.push(temp);
    }
  }
  return result;
}
var result = collect_same_elements(collection_a,collection_b);
*/
function collect_same_elements(collection_a,collection_b) {
  return collection_a.filter(function(item){
    return collection_b[0].indexOf(item) != -1;
  });
}
