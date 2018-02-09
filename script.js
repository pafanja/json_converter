$(function() {
  var arr = [];
  function toStr(obj,prefix){
    prefix = prefix || '';
    switch (typeof obj){
      case 'object':
        if (Array.isArray(obj))
          arr.push(prefix + ':' + JSON.stringify(obj));
        var output = "";
        for (var k in obj){
          if (obj.hasOwnProperty(k))
            output += toStr(obj[k], prefix + '.' + k);
        }
        return output;
      case 'function': return "";
      default:
        arr.push(prefix + ':' + obj);//with values
    }
  }
  function delSymbol (sym, sym2, arr) {
    for (var j=0; j<arr.length; j++) 
        if (arr[j].match(sym) || arr[j].match(sym2)) delete arr[j];
}
  //Зробив вхідний JSON в один рядок, того шо вибивало "invalid or unexpected token"
  const inputJson = '{"root":{"design":{"options":[{"val":1},{"val":2},{"val":3}]},"comments":[0,1,2],"data":{"inner":[{"array":[{"x":35}]},{"array":[{"y":15}]}]}}}';
  var parsedJson = JSON.parse(inputJson);
  toStr(parsedJson);
  //delete elements
  delSymbol(',' , '"', arr);
  //clear undefined elem
  arr = arr.filter(function(n){ return n != undefined }); 
  //convert to json
  var outputJson = JSON.stringify(arr);
  console.log(outputJson);
});

