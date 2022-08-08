// // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// // Symbol       Value
// // I             1
// // V             5
// // X             10
// // L             50
// // C             100
// // D             500
// // M             1000
// // For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// // Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// // I can be placed before V (5) and X (10) to make 4 and 9. 
// // X can be placed before L (50) and C (100) to make 40 and 90. 
// // C can be placed before D (500) and M (1000) to make 400 and 900.
// // Given a roman numeral, convert it to an integer.



// // Example 1:

// // Input: s = "III"
// // Output: 3
// // Explanation: III = 3.
// // Example 2:

// // Input: s = "LVIII"
// // Output: 58
// // Explanation: L = 50, V= 5, III = 3.
// // Example 3:

// // Input: s = "MCMXCIV"
// // Output: 1994
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// // Constraints:

// // 1 <= s.length <= 15
// // s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// // It is guaranteed that s is a valid roman numeral in the range [1, 3999].





// function romanToInt(s) {
//   const key = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//   let integers = []
//   for (let i = 0; i < s.length; i++) {
//     if (key[s[i]] < key[s[i + 1]]) {
//       integers.push(key[s[i + 1]] - key[s[i]])
//       i++
//     } else {
//       integers.push(key[s[i]])
//     }
//   }
//   return integers.reduce((a, b) => a + b, 0)
// }

// // romanToInt("MCMXCIV")

// // 1000, 100, 1000, 10, 100, 1, 5

// // lettcode degree of an array
// //https://leetcode.com/problems/degree-of-an-array/

// //Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// // Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.


// // INTEGERS TO ROMAN

// // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// // Symbol       Value
// // I             1
// // V             5
// // X             10
// // L             50
// // C             100
// // D             500
// // M             1000
// // For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// // Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// // I can be placed before V (5) and X (10) to make 4 and 9. 
// // X can be placed before L (50) and C (100) to make 40 and 90. 
// // C can be placed before D (500) and M (1000) to make 400 and 900.
// // Given an integer, convert it to a roman numeral.



// // Example 1:

// // Input: num = 3
// // Output: "III"
// // Explanation: 3 is represented as 3 ones.
// // Example 2:

// // Input: num = 58
// // Output: "LVIII"
// // Explanation: L = 50, V = 5, III = 3.
// // Example 3:

// // Input: num = 1994
// // Output: "MCMXCIV"
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.







// // Example 1:

// // Input: nums = [1,2,2,3,1]
// // Output: 2
// // Explanation: 
// // The input array has a degree of 2 because both elements 1 and 2 appear twice.
// // Of the subarrays that have the same degree:
// // [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// // The shortest length is 2. So return 2.
// // Example 2:

// // Input: nums = [1,2,2,3,1,4,2]
// // Output: 6
// // Explanation: 
// // The degree is 3 because the element 2 is repeated 3 times.
// // So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.




// //Two Sum

// //https://leetcode.com/problems/two-sum/

// // var twoSum = function(nums, target) {
// //   //go through each number
// //   // find out what the number pair needs to be
// //   // find out if that exists in the array
// //   let answer = []
// //   nums.forEach((num, idx) => {
// //     let needed = target - num
// //     if (nums.includes(needed)) {
// //       let idxNeeded = nums.indexOf(needed)
// //       if (idx !== idxNeeded) {
// //         answer.push(idx, idxNeeded)
// //       }

// //     }
// //   })

// //   return answer.splice(0,2)
// // };


// function twoSum(nums, target) {
//   let m = new Map()
//   let pair = []
//   nums.forEach(num => {
//     m.set(num, target - num)
//   })


//   for (const i of m) {
//     if (nums.includes(i[1]) && nums.indexOf(i[0]) !== nums.indexOf(i[1])) {
//       pair = [nums.indexOf(i[0]), nums.indexOf(i[1])]
//     }
//   }

//   console.log(pair);
//   if (pair[0] === pair[1]) {
//     return [nums.indexOf(pair[0]), nums.indexOf(pair[1], 2)]
//   } else {
//     return [nums.indexOf(pair[0]), nums.indexOf(pair[1])]
//   }


// }

// // console.log(twoSum([3, 3], 6))


// // // twoSum([3,2,4], 6 )

// // let m = new Map()

// // m.set(10, 100)
// // m.set(8, true)
// // m.set("apple", 45)

// // for (const i of m) {
// //   console.log(i);
// // }

// //palendrome number
// //https://leetcode.com/problems/palindrome-number/



// var isPalindrome = function (x) {
//   let string = x.toString()
//   let forwardArr = string.split("")
//   let backwardArr = []
//   forwardArr.forEach(number => backwardArr.unshift(number))
//   return forwardArr.join("") === backwardArr.join("") ? true : false

// };


// // console.log(isPalindrome(122));

// //longest common prefix https://leetcode.com/problems/longest-common-prefix/


// var longestCommonPrefix = function (strs) {
//   let firstLetters = []
//   for (let i = 0; i < strs.length; i++) {
//     let char = strs[i][0]
//     console.log(char);
//   }

// };


// // console.log(longestCommonPrefix(["flower","flow","alight"]));


// // 21 merge two sorted lists
// // https://leetcode.com/problems/merge-two-sorted-lists/


// var mergeTwoLists = function (l1, l2) {
//   // Initialise a new LinkedList with a dummy ListNode
//   let newList = new ListNode(0);

//   // Maintain a reference to the head of the new LinkedList
//   let headOfNewList = newList;

//   // Whilst both of the passed in lists contain more elements
//   while (l1 != null && l2 != null) {
//     // If l1's value is smaller
//     if (l1.val < l2.val) {
//       // Add l1's value to the new list
//       newList.next = l1;

//       // Move l1 to its next element
//       l1 = l1.next;
//     } else {
//       // Add l2's value to the new list
//       newList.next = l2;

//       // Move l2 to its next element
//       l2 = l2.next;
//     }

//     // Move into the next level of the LinkedList for the next iteration
//     newList = newList.next;
//   }

//   // If l1 has run out of elements
//   if (l1 == null) {
//     // Append l2 to the new list
//     newList.next = l2;
//   }
//   // If l2 has run out of elements
//   else {
//     // Append l1 to the new list
//     newList.next = l1;
//   }

//   return headOfNewList.next;
// };

// // console.log(mergeTwoLists([1,2,3],[4,5,6]));


// //code wars twosum https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

// function twoSum(numbers, target) {
//   //return the indicies of the array that add up to the target
//   //must be two different items
//   let pairs = new Map()

//   numbers.forEach(number => {
//     pairs.set(number, target - number)
//   })

//   for (const i of pairs) {
//     if (numbers.includes(i[1]) && numbers.indexOf(i[0]) !== numbers.indexOf(i[1])) {
//       return [numbers.indexOf(i[0]), numbers.indexOf(i[1])]
//     }
//   }
// }


// // console.log(twoSum([1,2,3], 4));

// //https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

// function sumDigPow(a, b) {
//   let answers = []
//   for (let i = a; i <= b; i++) {
//     let stringNum = String(i)
//     let numArray = []
//     for (let j = 0; j < stringNum.length; j++) {
//       numArray.push(parseInt(stringNum[j]))
//     }
//     let acc = 0
//     numArray.forEach((number, idx) => {
//       acc = acc + Math.pow(number, idx + 1)
//     })
//     if (i === acc) { answers.push(i) }
//   }
//   return answers


// }

// // console.log(sumDigPow(1, 100));




// // // add two numbers linked list
// // https://leetcode.com/problems/add-two-numbers/
// // /**
// // var addTwoNumbers = function(l1, l2) {

// //   class Node {
// // constructor(val) {
// //   this.val = val;
// //   this.next = null;
// // }
// // }


// //   let current1 = l1
// //   let current2 = l2
// //   let num1 = []
// //   let num2 = []
// //   let string1 = ""
// //   let string2 = ""
// //   while (current1 !== null){
// //       num1.unshift(current1.val)
// //       current1 = current1.next
// //   }
// //   while (current2 !== null){
// //       num2.unshift(current2.val)
// //       current2 = current2.next
// //   }
// //   num1.forEach(number => string1 += number)
// //   num1 = parseInt(string1)

// //   num2.forEach(number => string2 += number)
// //   num2 = parseInt(string2)

// //   const total = num1 + num2
// //   const stringTotal = total.toString()
// //   let backwardsTotal = []


// //   for (let i of stringTotal){
// //       backwardsTotal.unshift(i)
// //   }


// //   let dummy = new Node(null)
// //   let tail = dummy

// //   for (let i = 0; i < backwardsTotal.length; i++){
// //       const current = new Node(parseInt(backwardsTotal[i]))
// //       tail.next = current
// //       tail = tail.next

// //   }
// //   console.log(dummy.next)
// //   return dummy.next


// // };

// // remove duplicates in array https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

// // var removeDuplicates = function(nums) {
// //   for (let i = 0; i < nums.length; i++){
// //       const current = nums[i]
// //       for (let j = i+1; j < nums.length; j ++){
// //           if (nums[j] === current){
// //               nums.splice(j, 1)
// //               j--
// //           }
// //       }
// //   }    
// //   return nums
// // };



// const removeDuplicates = nums => {
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] != nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   return i + 1;
// }


// // var lengthOfLastWord = function (s) {
// //   if (s.indexOf(' ') === -1) return s.length
// //   let i = s.length - 1
// //   const array = []

// //   if (s[i] === ' ') {
// //     while (s[i] == ' ') {
// //       i--
// //     }

// //   }

// //   while (s[i] !== ' ') {
// //     array.unshift(s[i])
// //     i--
// //   }


// //   return array.length
// // };


// var lengthOfLastWord = function (s) {
//   const words = s.trim().split(" ");
//   return words.length > 0 ? words[words.length - 1].length : 0;
// };

// console.log(lengthOfLastWord(" a"));


// remove nth node from end https://leetcode.com/problems/remove-nth-node-from-end-of-list/


// var removeNthFromEnd = function(head, n) {


//   let current = head
//   let length = 0
//   while(current !== null){
//       length ++
//       current = current.next
//   }
//   const toRemove = length - n + 1

//   current = head
//   let index = 1
//   let prev = null
//   if(toRemove === 1) return head.next
//   while(current !== null){
//       if (index === toRemove){
//           prev.next = current.next
//       }

//       index ++
//       prev = current
//       current = current.next
//   }

//    return head
// };

//intersection of two linked lists https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/

// var getIntersectionNode = function(headA, headB) {
//   if (headA === null || headB === null) return null
//   let currentA = headA
//   let currentB = headB
//   const set = new Set()

//   while (currentA !== null) {
//       set.add(currentA)
//       currentA = currentA.next
//   }

//   while (currentB !== null){
//       if(set.has(currentB)){
//           console.log(currentB)
//           return currentB
//       }
//       currentB = currentB.next
//   }

//   return null
// };

// linked list cycle https://leetcode.com/problems/linked-list-cycle/submissions/

// var hasCycle = function(head) {
//   if (head === null) return false
//   const prev = new Set()
//   let current = head

//   while(current !== null){
//       if (prev.has(current)){
//           return true
//       }
//       prev.add(current)
//       current = current.next
//   }

//   return false

// };

// number of good pairs
//https://leetcode.com/problems/number-of-good-pairs/submissions/

// var numIdenticalPairs = function(nums) {
//   const prev = {}
//   let pairs = 0

//   for(let i = 0; i < nums.length; i++){
//       const current = nums[i]
//       if(!(current in prev)){
//           prev[current] = 1
//       } else {
//       pairs += prev[current]
//       prev[current] ++    

//       }
//   }
//   return pairs
// };



//longest common prefix

// var longestCommonPrefix = function(strs) {
//   let prefix = ''
//   const firstWord = strs[0]

//   for (let i = 0; i < firstWord.length; i++){
//       const letter = firstWord[i]
//       let isSame = true

//       for(let j = 1; j < strs.length; j++){
//           const word = strs[j]
//           if(letter !== word[i]){
//              return prefix
//           }    
//       }
//       if (isSame === true){
//           prefix = prefix + letter
//       }
//   }
//   return prefix
// };


//longest repeating substring without repeating characters

// var lengthOfLongestSubstring = function (s) {
//   const subStrings = []
//   let length = 0

//   for (let i = 0; i < s.length; i++) {
//     let substring = new Set()
//     substring.add(s[i])
//     for (let j = i + 1; j < s.length; j++) {
//       const letter = s[j]
//       if (!(substring.has(letter))) {
//         substring.add(letter)
//       } else {
//         break
//       }
//     }
//     if (substring.size > length) length = substring.size
//     subStrings.push(substring)
//   }
//   return length
// };

// console.log(lengthOfLongestSubstring("pwwkew"));




// var longestPalindrome = function (s) {
//   if (s.length === 1) return s
//   if (isPalendrome(s)) return s
//   let pal = ''

//   for (let i = 0; i < s.length; i++) {
//     const start = s[i]
//     let substring = `${start}`
//     if (isPalendrome(substring) && substring.length > pal.length) {
//       pal = substring
//     }
//     for (let j = i + 1; j < s.length; j++) {
//       const letter = s[j]
//       substring = substring + letter
//       if (isPalendrome(substring) && substring.length > pal.length) {
//         pal = substring
//       }


//     }

//   }
//   console.log(pal);
//   return pal
// };

// const isPalendrome = (string) => {
//   if (string === string.split('').reverse().join('')) return true
// }

//https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript

class User {
  constructor() {
    this.rank = -8,
      this.progress = 0
  }
  incProgress(rank) {
    this.checkMax()
    if (rank < -8 || rank > 8 || rank === 0) {
      const error = `${rank} is not within bounds`
      console.log(error)
      throw error
      return
    }

    if (rank < this.rank) {
      return
    }
    if (rank === this.rank) {
      this.progress += 3
      this.checkProgress()
    }
    if (rank > this.rank) {
      let diff = rank - this.rank
      if (rank > 0 && this.rank < 0) {
        console.log(diff);
        diff--
        console.log(diff);
      }
      this.progress += 10 * diff * diff
      this.checkProgress()
      this.checkMax()
    }
    this.checkMax()
  }

  checkProgress() {
    if (this.progress === 100) {
      this.rank += 1
      this.progress = 0
      this.checkZero()
      return
    }
    let progressAcc = this.progress
    while (progressAcc > 100) {
      progressAcc -= 100
      this.rank++
      this.checkZero()
      this.checkMax()
    }
    this.progress = progressAcc > 0 ? progressAcc : 0
  }
  checkZero(){
    if (this.rank === 0) {
      this.rank = 1
    }
  }
  checkMax(){
    if (this.rank > 7) {
      console.log('highest rank achecived')
      this.rank = 8
      this.progress = 0
      return
    }
  }
}

const user = new User()
user.rank = -1
user.incProgress(5)
console.log(user);