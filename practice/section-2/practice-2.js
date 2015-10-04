function count_same_elements(collection) {
  var result = [];
  var counts = {};
  var item;

  collection.forEach(function (value) {
    item = formatItem(value);
    counts[item.key] = counts[item.key] + item.count || item.count;
  });
  for (var k in counts) {
    result.push({key: k, count: counts[k]});
  }
  return result;
}

function formatItem(item) {
  if (item.length === 1) {
    return {key: item, count: 1};
  }
  //return { key: item[0], count: parseInt(item.substring(2,3)) };
  return {key: item[0], count: parseInt(item.substr(2, 1))};
}
