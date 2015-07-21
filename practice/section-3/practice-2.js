// function judgeEle(ele,object_b) {
//   var temp;
//   for (var i = 0; i < object_b.value.length; i++) {
//     if((ele.key === object_b.value[i])&&(ele.count >= 3)) {
//       temp = parseInt(ele.count/3);
//       ele.count -= temp;
//       return;
//     }
//   }
//   return;
// }
// function create_updated_collection(collection_a, object_b) {
//   for (var i = 0; i < collection_a.length; i++) {
//     judgeEle(collection_a[i],object_b);
//   }
//   return collection_a;
// }
// create_updated_collection(collection_a,object_b);
function create_updated_collection(collection_a, object_b) {
  for (var i = 0; i < collection_a.length; i++) {
    if (object_b.value.indexOf(collection_a[i].key) != -1) {
      collection_a[i].count -= Math.floor(collection_a[i].count / 3);
    }
  }
  return collection_a;
}
