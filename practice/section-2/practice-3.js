function count_same_elements(collection) {
  var result = [];
  var counts = {};
  var item;

  collection.forEach(function (value) {
    item = formatItem(value);
    counts[item.char] = counts[item.char] + item.count || item.count;
  });
  for (var char in counts) {
    result.push({ name: char, summary: counts[char] });
  }
  return result;
}

function formatItem(item) {
  if (item.length === 1) {
    return { char: item, count: 1 };
  }
  else {
    return { char: item[0], count: parseInt(item.slice(2)) };
  }
}
