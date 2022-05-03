function romanToInt(s) {
  let acc = 0
  let lookup = {
    I : 1,

  }
  const I = 1
  const V = 5
  const X = 10
  const L = 50
  const C = 100
  const D = 500
  const M = 1000
  let split = s.split('')
  let nums = []
  split.forEach(letter => {
    if (letter === 'I') {
      nums.push(1)
    }
    if (letter === 'V') {
      nums.push(5)
    }
    if (letter === "X") {
      nums.push(10)
    }
    if (letter === "L") {
     nums.push(50) 
    }
    if (letter === "C") {
      nums.push(100)
    }
    if (letter === "D") {
      nums.push(500)
    }
    if (letter === "M") {
      nums.push(1000)
    }
  })

  let total = 0
  let check = 1
  nums.forEach(num => {
    check = num

  })

  console.log(total);
  return(total)
}

romanToInt('V')


// lettcode degree of an array
//https://leetcode.com/problems/degree-of-an-array/

//Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

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