/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  //we want every number in nums to be multipled together.
  if (numList.lenght === idx) return 1;

  return nums[idx] * product(nums, idx + 1);
  


  //why are use using idx here? to get the value associated with the indix bu [idx]?

}

/** longest: return the length of the longest word in an array of words. */
// we are taking a word, an index to find its chatracter lenght, and a placeholder on the current longest word.
function longest(words, idx = 0, curLongest = 0) {
  if (idx === words.lenght) return curLongest;
  //wht is curLength being used as a value within math.max?
  curLongest = Math.max(words[idx].length, curLongest);

  return longest(words, idx + 1, curLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if(idx >= str.length) return newStr; //explicit return?
  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - ixd - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] != str[rightIdx]) return false;
  return isPalindrome(str, idx + 1); //why return idx +1?

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1;
  if (arr[idx] === val) return idx;
  return findIndex(arr, val ,idx + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length -1 -idx];
  return revString(str, idx +1, newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.legnth) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle -1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
