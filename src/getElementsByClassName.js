// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  var arrayAns = [];
  
  //debugger;
  //

  var search = function(element) {

    if (element.classList && element.classList.contains(className)) {
      arrayAns.push(element); 
    }

    for (var i = 0; i < element.childNodes.length; i ++) {
      search(element.childNodes[i]);
    } 
  };

  search(document.body);
  return arrayAns;
};
