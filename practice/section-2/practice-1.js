function count_same_elements(collection) {
  var result = [];
  var objResult = {};
  collection.forEach(function (val) {
    objResult[val] = objResult[val] + 1 || 1;
  });
   for (var j in objResult) {
    result.push({key:j,count:objResult[j]});
  }
  return result;
}
