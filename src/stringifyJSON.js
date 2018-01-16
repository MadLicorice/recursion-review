// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';

  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'boolean') {
    return obj.toString();
  } 

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    result += '{';
    for (let key in obj) {
      if (typeof key !== 'function' && typeof obj[key] !== 'function' && typeof key !== 'undefined' && typeof obj[key] !== 'undefined') {
        result += stringifyJSON(key);
        result += ':';
        result += stringifyJSON(obj[key]);
        result += ',';
      }
    } 
    if (result[result.length - 1] === ',') {
      result = result.slice(0, -1);
    }
    result += '}';
  }

  if (Array.isArray(obj)) {
    result += '[';
    obj.forEach(function(element) {
      if (typeof element !== 'function' || typeof element !== 'undefined') {
        result += stringifyJSON(element);
        result += ',';
      }
    });

    if (result[result.length - 1] === ',') {
      result = result.slice(0, -1);
    }
    result += ']';
  }

  return result;
};