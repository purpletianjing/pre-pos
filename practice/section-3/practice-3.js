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

  result.forEach(function(val) {
    if (object_b.value.indexOf(val.key) != -1) {
      val.count -= Math.floor(val.count / 3);
    }
    })
  return result;
}
