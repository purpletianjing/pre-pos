// function findEle(ele,result) {
//   for (var i = 0; i < result.length; i++) {
//     if(ele === result[i].key) {
//       result[i].count++;
//       return;
//     }
//   }
//   if(ele.length > 1) {
//     result.push({key:ele[0],count:parseInt(ele[2])});
//     return;
//   }
//   result.push({key:ele,count:1});
// }
// function count_same_elements(collection) {
//   var result = [];
//   for (var i = 0; i < collection.length;i++) {
//     findEle(collection[i],result);
//   }
//   return result;
// }
//}
function count_same_elements(collection) {
  var result = [];
  var counts = {};
  for (var i = 0; i < collection.length; i++) {
    var item = formatItem(collection[i]);
    counts[item.key] = (counts[item.key] + item.count) || item.count;
  }
  for (var k in counts) {
    result.push({ key: k, count: counts[k] });
  }
  return result;
}

function formatItem(item) {
  if(item.length === 1){
    return { key: item, count: 1 };
  }
  //return { key: item[0], count: parseInt(item.substring(2,3)) };
  return { key:item[0], count: parseInt(item.substr(2,1))};
}
