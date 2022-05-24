// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].





function romanToInt(s) {
  const key = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
  let integers = []
  for (let i = 0; i < s.length; i++) {
    if (key[s[i]] < key[s[i + 1]]) {
      integers.push(key[s[i+1]] - key[s[i]])
      i++
    } else {
      integers.push(key[s[i]])
    }
  }
  return integers.reduce((a,b)=> a+b, 0)
}

// romanToInt("MCMXCIV")

// 1000, 100, 1000, 10, 100, 1, 5

// lettcode degree of an array
//https://leetcode.com/problems/degree-of-an-array/

//Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.


// INTEGERS TO ROMAN

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

 

// Example 1:

// Input: num = 3
// Output: "III"
// Explanation: 3 is represented as 3 ones.
// Example 2:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 3:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.







// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.




//Two Sum

//https://leetcode.com/problems/two-sum/

// var twoSum = function(nums, target) {
//   //go through each number
//   // find out what the number pair needs to be
//   // find out if that exists in the array
//   let answer = []
//   nums.forEach((num, idx) => {
//     let needed = target - num
//     if (nums.includes(needed)) {
//       let idxNeeded = nums.indexOf(needed)
//       if (idx !== idxNeeded) {
//         answer.push(idx, idxNeeded)
//       }
      
//     }
//   })
  
//   return answer.splice(0,2)
// };


function twoSum(nums, target) {
  let m = new Map()
  let pair = []
  nums.forEach(num => {
    m.set(num, target - num)
  })


  for (const i of m) {
    if (nums.includes(i[1]) && nums.indexOf(i[0]) !== nums.indexOf(i[1])){
      pair = [nums.indexOf(i[0]), nums.indexOf(i[1])]
    }
  }

  console.log(pair);
  if (pair[0]===pair[1]) {
    return [nums.indexOf(pair[0]), nums.indexOf(pair[1], 2)]
  } else {
    return [nums.indexOf(pair[0]), nums.indexOf(pair[1])]
  }


}

// console.log(twoSum([3, 3], 6))


// // twoSum([3,2,4], 6 )

// let m = new Map()

// m.set(10, 100)
// m.set(8, true)
// m.set("apple", 45)

// for (const i of m) {
//   console.log(i);
// }

//palendrome number
//https://leetcode.com/problems/palindrome-number/



var isPalindrome = function(x) {
  let string = x.toString()
  let forwardArr = string.split("")
  let backwardArr = []
  forwardArr.forEach(number => backwardArr.unshift(number))
  return forwardArr.join("") === backwardArr.join("") ? true : false

};


// console.log(isPalindrome(122));

//longest common prefix https://leetcode.com/problems/longest-common-prefix/


var longestCommonPrefix = function(strs) {
  let firstLetters = []
  for (let i = 0; i < strs.length; i++) {
    let char = strs[i][0]
    console.log(char);
  }  

};


// console.log(longestCommonPrefix(["flower","flow","alight"]));


// 21 merge two sorted lists
// https://leetcode.com/problems/merge-two-sorted-lists/


var mergeTwoLists = function(list1, list2) {
  let sorted = []
  let length 
  if (list1.length > list2.length || list1.length === list2.length ) {
    length = list1.length
  } else {
    length = list2.length
  }
  let holder
  for (let i = 0; i < length; i++) {
    holder = link1[i]
    if (condition) {
      
    }
    
  }
};



console.log(mergeTwoLists([1,2,4],[1,3,4]));