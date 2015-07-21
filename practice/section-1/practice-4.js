// function arrObjectSame(ele,object_b)  {
//   for (var i = 0; i < object_b.value.length; i++) {
//     if(ele === object_b.value[i]) {
//       return ele;
//     }
//   }
// }
// function collect_same_elements(collection_a, object_b) {
//   var temp;
//   var result = [];
//   for (var i = 0; i < collection_a.length; i++) {
//     temp = arrObjectSame(collection_a[i].key,object_b);
//     if(temp !== undefined)  {
//       result.push(temp);
//     }
//   }
//   return result;
// }
function collect_same_elements(collection_a,object_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    if(object_b.value.indexOf(collection_a[i].key) !== -1) {
      result.push(collection_a[i].key);
    }
  }
  return result;
}
