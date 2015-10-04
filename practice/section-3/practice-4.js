function create_updated_collection(collection_a, object_b) {
  var changeFormResult = change_collection_form(collection_a);
  changeFormResult.forEach(function (val) {
    if (object_b.value.indexOf(val.key) != -1) {
      val.count -= parseInt(val.count / 3);
    }
  });
  return changeFormResult;
}

function change_collection_form(collection_a) {
  var objResult = {};
  var result = [];
  collection_a.forEach(function (character) {
    var key = character.split("-")[0];
    var count = parseInt(character.split("-")[1]) || 1;
    objResult[key] = (objResult[key] + count) || count;
  });
  for (var attribute in objResult) {
    result.push({key: attribute, count: objResult[attribute]});
  }
  return result;
}
