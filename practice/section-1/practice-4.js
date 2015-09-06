function collect_same_elements(collection_a,object_b) {
  var result = [];
  collection_a.forEach(function(val) {
    if(object_b.value.indexOf(val.key) !== -1) {
      result.push(val.key);
    }
  });
  return result;
}
