function comEle(ele,collection_c) {
  for (var i = 0; i < collection_c.length; i++) {
    if(ele[0] === collection_c[i].key) {
      if(ele.length > 1) {
        collection_c[i] += parseInt(ele[2]);
        return;
      }
      collection_c[i].count++;
      return;
      }
  }
  if(ele.length > 1) {
    collection_c.push({key:ele[0],count:parseInt(ele[2])});
    return;
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
