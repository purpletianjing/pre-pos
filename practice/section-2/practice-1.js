// function findEle(ele,result) {
//   for (var i = 0; i < result.length; i++) {
//     if(ele === result[i].key) {
//       result[i].count++;
//       return;
//     }
//   }
//   result.push({key:ele,count:1});
// }
function count_same_elements(collection) {
  var result = [];
  var objResult = {};
  for (var i = 0; i < collection.length;i++) {
    objResult[collection[i]] = (objResult[collection[i]] + 1) || 1;
  }
  for (var j in objResult) {
    result.push({key:j,count:objResult[j]});
  }
  return result;
}
