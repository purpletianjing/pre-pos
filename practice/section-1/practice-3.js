function sameEle(ele,object_b)  {
  for (var i = 0; i < object_b.value.length; i++) {
    if(ele === object_b.value[i])  {
      return ele;
    }
  }
}
function collect_same_elements(collection_a, object_b) {
  var temp;
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    temp = sameEle(collection_a[i],object_b);
    if(temp !== undefined)  {
      result.push(temp);
    }
  }
  return result;
}
var result = collect_same_elements(collection_a,collection_b);
