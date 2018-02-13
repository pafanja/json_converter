window.onload = function () {
  var arr = [];
  function toStr(obj,prefix){
    prefix = prefix || '';
    switch (typeof obj){
      case 'object':
        arr.push(prefix + ':' + JSON.stringify(obj));
        var output = "";
          Object.keys(obj).forEach(function (key) {
              output += toStr(obj[key], prefix + '.' + key);
          });
        return output;
      default:
        arr.push(prefix + ':' + obj);//with values
    }
  }
  function delSymbol (sym, sym2, arr) {
    for (var j=0; j<arr.length; j++){
        if (arr[j].indexOf(sym) !== -1 || arr[j].indexOf(sym2) !== -1) { delete arr[j] };
    }
    //залишаю delete , так як arr.splice(j,1) нічого не видаляє
      // match змінив на indexOf
}
  //Якшо брати xmlhttp то вибиває No 'Access-Control-Allow-Origin', а Гугл нічого не видав по вирішенню для static server
  const inputJson = '{"root":{"design":{"options":[{"val":1},{"val":2},{"val":3}]},"comments":[0,1,2],"data":{"inner":[{"array":[{"x":35}]},{"array":[{"y":15}]}]}}}';
  var parsedJson = JSON.parse(inputJson);
  toStr(parsedJson);
  //delete elements
  delSymbol(',','"',arr);
  //clear undefined elem
  arr = arr.filter(function(n){ return n != undefined });
  //convert to json
  var outputJson = JSON.stringify(arr);
  console.log(outputJson);
}

