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
