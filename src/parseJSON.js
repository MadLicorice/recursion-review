// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  //starting our function
  var result;
  
  if (json[0] === '"') {
    for (var j = 1; j < json.length; j++) {
      if (json[j] === '"') {
        return json.slice(1, j);
      }
    }
  }

  //check if [ {
  if (json[0] === '[') {
    result = [];
    var count = 1;
    for (var i = 1; i < json.length; i++) {
      if (json[i] === '[') {
        count += 1;
      } else if (json[i] === ']') {
        count -= 1;
      }
      
      if (count === 0) {
        if (json[1] !== ']') {
          var countComma = 0;
          for (var g = 1; g < i; g++) {
            if (json[g] === ',') {
              countComma += 1;
            }
          }
          if (countComma === 0) {
            result.push(parseJSON(json.slice(1, i)));
          } else {
            var countCommaPos = 1;
            for (var k = 1; k < i; k++) {
              if (json[k] === ',') {
                result.push(parseJSON(json.slice(countCommaPos, k)));
                countCommaPos = k + 1;
              }
            }
            result.push(parseJSON(json.slice(countCommaPos, i)));
          }
        }
      }
    }
  } 
  // else if (json[0] === '{') {
  //   result = {};
  //   var count = 1;
  //   for (var i = 1; i < json.length; i++) {
  //     if (json[i] === '{') {
  //       count += 1;
  //     } else if (json[i] === '}') {
  //       count -= 1;
  //     }
    
  //     if (count === 0) {
  //       var parsed = parseJSON(json.slice(1, i));
  //       if (parsed !== undefined) {
  //         result.push(parsed);
  //       } 
  //     }
  //   }
  // }
  // debugger;

  return result;
  
};