/*function comEle(ele,collection_c) {
  for (var i = 0; i < collection_c.length; i++) {
    if(ele === collection_c[i].key) {
      collection_c[i].count++;
      return;
      }
  }
  collection_c.push({key:ele,count:1});
}
function sameEle(ele,object_b) {
  var temp;
  for (var i = 0; i < object_b.value.length; i++) {
    if(ele.key === object_b.value[i]) {
      ele.count -= parseInt(ele.count/3);
      return;
    }
  }
}
function create_updated_collection(collection_a, object_b) {
  var collection_c = [];
  for (var i = 0; i < collection_a.length; i++) {
    comEle(collection_a[i],collection_c);
  }
  for (var k = 0; k < collection_c.length; k++) {
    sameEle(collection_c[k],object_b);
  }
  return collection_c;
}*/

// function countSameElements(result,collection_a) {
//   collection_a.map(function(val){
//     result.map(function(item){
//       item.key = val ? item.count+1 : 1;
//     });
//     //objResult[val] = objResult[val] ? objResult[val]+1 : 1;
//   });
//   return result;
// }

// function computeCount(result,object_b) {
//   result.forEach(function(val){
//       for (var i = 0; i < object_b.value.length; i++) {
//         if (val.key === object_b.value[i]) {
//           val.count -= parseInt(val.count / 3);
//           break;
//         }
//       }
//   });
//   return result;
// }
function countSameElements(result,collection_a) {
  var objResult = {};
  collection_a.map(function(val){
    //objResult[val] = objResult[val] ? objResult[val]+1 : 1;
    objResult[val] = (objResult[val] +1) || 1;
  });
  for (var i in objResult) {
    result.push({key:i,count:objResult[i]});
  }
  return result;
}

function create_updated_collection(collection_a,object_b) {
  var result = [];
  countSameElements(result,collection_a);
  for (var i = 0; i < result.length; i++) {
    if (object_b.value.indexOf(result[i].key) != -1) {
      result[i].count -= Math.floor(result[i].count / 3);
    }
  }
  return result;
}
