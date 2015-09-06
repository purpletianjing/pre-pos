function countSameElements(result,collection_a) {
  var objResult = {};

  collection_a.map(function(val){
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
