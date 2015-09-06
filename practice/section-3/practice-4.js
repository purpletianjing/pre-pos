function countSameElements(collection_a) {
  var objResult = {};
  var result = [];
  collection_a.map(function(val){
    return {key:val.split("-")[0],count:parseInt(val.split("-")[1] || 1)};
  }).forEach(function(obj){
    objResult[obj.key] = objResult[obj.key] || 0;
    objResult[obj.key] += obj.count;
  });
  for (var i in objResult) {
    result.push({key:i,count:objResult[i]});
  }
  return result;
}

function computeCount(result,object_b) {
  result.forEach(function(val){
      for (var i = 0; i < object_b.value.length; i++) {
        if (val.key === object_b.value[i]) {
          val.count -= parseInt(val.count / 3);
          break;
        }
      }
  });
  return result;
}

function create_updated_collection(collection_a,object_b) {
  var result = countSameElements(collection_a);
  result = computeCount(result,object_b);
  return result;
}
