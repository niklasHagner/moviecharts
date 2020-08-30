/* Finds a single item by property and value

EXAMPLE:
getItemByValue([[{name:'joe',age:20}, {name:'ben',age:70}, {name:'lisa', age:9}], 'age', 9);

OUTPUT: {name:'lisa', age:9}
*/
function getItemByValue(arr, propertyName, propertyValue) {
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
      if (!(propertyName in arr[i]))
          continue;
      //get all values is none has been specified
      if (isNullOrUndefinedOrEmpty(propertyValue))
          return arr[i];
      //get specific value
      else if (arr[i][propertyName] === propertyValue)
          return arr[i];
  }
  return null;
}

function getItemByValueAsValue(arr, propertyName, propertyValue) { /*returns a single item*/
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
      if (!(propertyName in arr[i]))
          continue;
      //get all values is none has been specified
      if (isNullOrUndefinedOrEmpty(propertyValue))
          return arr[i][propertyName];
      //get specific value
      else if (arr[i][propertyName] === propertyValue)
          return arr[i][propertyName];
  }
  return null;
}

/* getItemsByValue
  var personArray = [
  {id:1, name: "foo", age:20, state:"AZ", role:'programmer' },
  {id:2, name: "bar", age:30, state:"NY", role:'programmer' }
  ];
  var programmers_array = getItemsByValue(personArray, 'role', 'programmer'); //gets both items in array
*/
function getItemsByValue(arr, propertyName, propertyValue) {  /*returns an array*/
  var resultList = [];
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
      if (!(propertyName in arr[i]))
          continue;
      //get all values is none has been specified
      if (isNullOrUndefinedOrEmpty(propertyValue))
          resultList.push(arr[i]);
      //get specific values
      else if (arr[i][propertyName] === propertyValue)
          resultList.push(arr[i]);
  }
  return resultList;
}

function getItemsByValueAsValue(arr, propertyName, propertyValue) {  /*returns an array*/
  var resultList = [];
  for (var i = 0, iLen = arr.length; i < iLen; i++) {
      if (!(propertyName in arr[i]))
          continue;
      //get all values is none has been specified
      if (isNullOrUndefinedOrEmpty(propertyValue))
          resultList.push(arr[i][propertyName]);
      //get specific values
      else if (arr[i][propertyName] === propertyValue)
          resultList.push(arr[i][propertyName]);
  }
  return resultList;
}

/* getItemsAsValuePairs

var personArray = [
{id:1, name: "bob", age:20, state:"AZ", role:'HR' },
{id:2, name: "jack", age:30, state:"NY", role:'designer' }
];
getItemsAsValuePairs(personArray, 'name', 'age');

OUTPUT: [ {name:"bob", age:20}, {name:"jack", age:30} ]
*/
function getItemsAsValuePairs(arr, propertyName1, propertyName2) {  /*returns an array*/

  var resultList = [];

  for (var i = 0, iLen = arr.length; i < iLen; i++) {
      var newItem = new Object(); newItem[propertyName1] = ''; newItem[propertyName2] = '';
      if ((propertyName1 in arr[i]))
          newItem[propertyName1] = arr[i][propertyName1];
      if ((propertyName2 in arr[i]))
          newItem[propertyName2] = arr[i][propertyName2];
      resultList.push(newItem);
  }
  return resultList;
}

/*:
arrayContains([1, 2, 3, 4, 4, 5, 5, 6], 1);
OUTPUT: true
*/
function arrayContains(arr, item) {
  for (i = 0; i < arr.length; i++) {
      if (arr[i] == item)
          return true;
  }
  return false;
}


function getHighestFromArrayByProperty(array, propName) {
  var max = {};
  for (var i = 0; i < array.length; i++) {
      if (array[i][propName] > (max[propName] || 0))
          max = array[i];
  }
  return max;
}

/*
getTopOccurances([1, 2, 2, 4, 4, 5, 5, 5]);
OUTPUT: 2
*/
function getTopOccurances(array) {
var frequencies = [];
var maxFreq = 0;
for (var i in array) {
  frequencies[array[i]] = (frequencies[array[i]] || 0) + 1; // increment frequency.
  if (frequencies[array[i]] > maxFreq) {
    maxFreq = frequencies[array[i]]; // update max.
    mode = array[i];
  }
}
return frequencies;
}

/*
getOccurances(['a','a','b','c','c','c','c']);

OUTPUT: {a: 2, b: 1, c: 4}
*/
function getOccurances(arr) {
function count(arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}
return count(arr);
}


/*
sort([4,2,1,5], true)
OUTPUT: [5,4,2,1]

sort([4,2,1,5], false) 
OUTPUT: [1,2,4,5]
*/
function sort(arr, descending, type) {
  descending = descending || true;
  if (descending) {
      return arr.sort((a,b) => b - a);
  } else {
      return arr.sort((a,b) => a -b);
  }
}


/* 
sortByProperty([{name:'joe',age:20}, {name:'ben',age:70}, {name:'lisa', age:9}], 'age').reverse()

OUTPUT: [{name:'lisa', age:9}, {name:'joe',age:20}, {name:'ben',age:70}]
*/
function sortByProperty(arr, property) {
  return arr.sort((a,b) => b[property] - a[property]);
}

/* 
getUniqueByValue([{age:30},{age:20},{age:20}], 'age')

OUTPUT: [{age:30},{age:20}]
*/
var getUniqueByValue = function (arr, prop) {
  var a = [], l = arr.length;
  for (var i = 0; i < l; i++) {
      for (var j = i + 1; j < l; j++)
          if (arr[i][prop] === arr[j][prop]) j = ++i;
      a.push(arr[i]);
  }
  return a;
}

function removeItemFromArray(item, arr) {
  var index = $.inArray(item, arr);
  if (index >= 0)
      arr.splice(index, 1);
}
