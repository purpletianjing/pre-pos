function comEle(ele,collection_c) {
  for (var i = 0; i < collection_c.length; i++) {
    if(ele === collection_c[i].key) {
      collection_c[i].count++;
      return;
      }
  }
  collection_c.push({key:ele,count:1});
}
function sameEle(ele,object_b) {
  var temp;
  for (var i = 0; i < object_b.value.length; i++) {
    if(ele.key === object_b.value[i]) {
      ele.count -= parseInt(ele.count/3);
      return;
    }
  }
}
function create_updated_collection(collection_a, object_b) {
  var collection_c = [];
  for (var i = 0; i < collection_a.length; i++) {
    comEle(collection_a[i],collection_c);
  }
  for (var k = 0; k < collection_c.length; k++) {
    sameEle(collection_c[k],object_b);
  }
  return collection_c;
}
create_updated_collection(collection_a,object_b);
