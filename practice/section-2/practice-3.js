// function findEle(ele,result) {
//   var temp = 1;
//   var sum = 0;
//     for (var i = 0; i < result.length; i++) {
//     if(ele[0] === result[i].name) {
//       if(ele.length > 1) {
//         if(ele.length > 3) {
//           for(var k = ele.length - 2;k >= 2;k--) {
//             sum =sum + temp * parseInt(ele[k]);
//             temp = temp * 10;
//           }
//           result[i].summary += sum;
//           return;
//         }
//         result[i].summary += parseInt(ele[2]);
//         return;
//       }
//       result[i].summary++;
//       return;
//     }
//   }
//   if(ele.length > 1) {
//     result.push({name:ele[0],summary:parseInt(ele[2])});
//     return;
//   }
//   result.push({name:ele,summary:1});
// }
// function count_same_elements(collection) {
//   var result = [];
//   for (var i = 0; i < collection.length;i++) {
//     findEle(collection[i],result);
//   }
//   return result;
// }
// count_same_elements(collection);
function count_same_elements(collection) {
  var result = [];
  var counts = {};
  for (var i = 0; i < collection.length; i++) {
    var item = formatItem(collection[i]);
    counts[item.char] = (counts[item.char] + item.count) || item.count;
  }
  for (var char in counts) {
    result.push({ name: char, summary: counts[char] });
  }
  return result;
}

function formatItem(item) {
  if (item.length === 1) {
    return { char: item, count: 1 };
  } else if (item[1] === '[') {
    return { char: item[0], count: parseInt(item.substring(2, item.length - 1)) };
  } else {
    return { char: item[0], count: parseInt(item.substring(2)) };
  }
}
