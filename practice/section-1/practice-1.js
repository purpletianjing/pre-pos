/*function equalEle(elements,collection_b)  {
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
*/
/*
function collect_same_elements(collection_a, collection_b) {
var result = collection_a.filter(function(item){
return collection_b.indexOf(item) != -1;
});
return result;
}*/
/*function collect_same_elements(collection_a,collection_b) {
  var result = [];
  collection_a.forEach(function(item){
    collection_b.forEach(function(item1){
      if(item1 === item) {
        result.push(item);
      }
    });
  });
  return result;
}
collect_same_elements(collection_a,collection_b);*/
function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter(function(item) {
    return collection_b.indexOf(item) != -1;
  });
}
