// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  if (json === undefined) {
    return;
  }
  //starting our function
  var result;
  
  //check if [ {
  if (json[0] === '[') {
    result = [];
  } else if (json[0] === '{') {
    result = {};
  }
  debugger;
  var count = 1;
  for (var i = 1; i < json.length; i++) {
    if (json[i] === '[') {
      count += 1;
    } else if (json[i] === ']') {
      count -= 1;
    }
  
    if (count === 0) {
      result.push(parseJSON(json.slice(1, i)));
    }
  }

  return result;
  
};