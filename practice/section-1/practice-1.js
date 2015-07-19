function equalEle(elements,collection_b)  {
  for (var k = 0; k < collection_b.length; k++) {
    if(elements === collection_b[k])  {
      return elements;
    }
  }
}
function collect_same_elements(collection_a, collection_b)  {
  var result = [];
  var temp;
  for (var i = 0; i < collection_a.length; i++) {
    temp = equalEle(collection_a[i],collection_b);
    if(temp !== undefined)  {
      result.push(temp);
    }
  }
  return result;
}
var result = collect_same_elements(collection_a,collection_b);
