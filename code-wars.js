

// function pickPeaks(arr){
//   if (arr.length < 3) return

//   let i = 0
//   let j = 1
//   let k = 2

//   const answers = {pos: [], peaks: []}

//   while (i < arr.length) {
//     const left = arr[i]
//     const center = arr[j]
//     const right = arr[k]
//     if (center > left && center > right) {
//       answers.pos.push(j)
//       answers.peaks.push(center)
//     }
//     i ++
//     j ++
//     k ++

//   }
//   console.log(answers)
//   return answers
// }








// function pickPeaks(arr) {
//   const answers = { pos: [], peaks: [] }
//   if (arr.length < 3) return answers

//   let i = 0
//   let j = 1
//   let k = 2

//   while (i < arr.length) {
//     let left = arr[i]
//     let center = arr[j]
//     let right = arr[k]
//     if (center > left && center > right) {
//       answers.pos.push(j)
//       answers.peaks.push(center)
//     }

//     if (center === right && center > left) {
//       while (arr[j] === arr[k]) {
//         k++
//       }
//       if (arr[j] > arr[i] && arr[j] > arr[k]) {
//         answers.pos.push(j)
//         answers.peaks.push(arr[j])
//       }
//       j = k - 1
//       i = k - 2
//     }

//     i++
//     j++
//     k++
//   }

//   return answers
// }

// pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3])

// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
// catching car mileage number



// const isInteresting = (number, awesomePhrases) => {
//   if (number === 98 || number === 99) return 1
//   if (number < 100) return 0
//   const arrayNumber = number.toString().split('').map((num) => parseInt(num))

//   // check if number is in awesomePhrases
//   if (awesomePhrases.includes(number)) return 2

//   //check if number is approaching awesomePhrases
//   if (awesomePhrases.length > 0) {
//     for (let i = 0; i < awesomePhrases.length; i++) {
//       const element = awesomePhrases[i];
//       if (element - 1 === number || element - 2 === number) {
//         return 1
//       }
//     }
//   }

//   if(checkForZeros(number)) return 2
//   if(checkForSameNumber(number)) return 2
//   if(checkIncrementing(number)) return 2
//   if(checkDecrementing(number)) return 2
//   if(checkPalendrome(number)) return 2


//   if(checkForZeros(number + 1)) return 1
//   if(checkForZeros(number + 2)) return 1

//   if(checkForSameNumber(number + 1)) return 1
//   if(checkForSameNumber(number + 2)) return 1

//   if(checkIncrementing(number + 1)) return 1
//   if(checkIncrementing(number + 2)) return 1

//   if(checkDecrementing(number + 1)) return 1
//   if(checkDecrementing(number + 2)) return 1

//   if(checkPalendrome(number + 1)) return 1
//   if(checkPalendrome(number + 2)) return 1

//   return 0
// }

// const checkForZeros = (number) => {
//   const arrayNumber = number.toString().split('').map((num) => parseInt(num))
//   let checker = '1'
//   for (let i = 1; i < arrayNumber.length; i++) {
//     checker += '0'
//   }
//   if (number % parseInt(checker) === 0) {
//     return 2
//   }
// }

// const checkForSameNumber = (number) => {
//   const first = number % 10;
//   while (number) {
//     if (number % 10 !== first) return false;
//     number = Math.floor(number / 10);
//   }
//   return true
// }

// const checkIncrementing = (number) => {
//   const arrayNumber = number.toString().split('').map((num) => parseInt(num))
//   for (let i = 0; i < arrayNumber.length; i++) {
//     let num = arrayNumber[i];
//     if(num === 0)arrayNumber[i] = 10

//   }
//   console.log(arrayNumber);

//   let pointer = arrayNumber[0]
//   for (let i = 1; i < arrayNumber.length; i++) {
//     let current = arrayNumber[i];
//     if (current !== (pointer + 1)){
//       return false
//     }
//     pointer ++
//   }
//   return true
// }

// const checkDecrementing = (number) => {
//   const arrayNumber = number.toString().split('').map((num) => parseInt(num))
//   let pointer = arrayNumber[0]
//   for (let i = 1; i < arrayNumber.length; i++) {
//     const current = arrayNumber[i];
//     if (current !== (pointer - 1)){
//       return false
//     }
//     pointer --
//   }
//   return true
// }

// const checkPalendrome = (number) => {
//   const arrayNumber = number.toString().split('').map((num) => parseInt(num))
//   const reversed = [...arrayNumber].reverse()

//   for (let i = 0; i < arrayNumber.length; i++) {
//     if (arrayNumber[i] !== reversed[i]) return false

//   }

//   return true
// }



// console.log(isInteresting(7899, []));

//https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

//next bigger number with the same digits


// const nextBigger = (n) => {
//   const array = n.toString().split('').map(digit => parseInt(digit))

//   for (let i = 0; i < array.length; i++) {
//     const num = array[i];
//     for (let j = 1; j < array.length; j++){
//       console.log(num + array[j]);

//     }

//   }
// }

// console.log(nextBigger(12))


// gap in primes
// https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript

// const gap = (g, m, n) => {
//   let currentGap = 0
//   let prev

//   for (let i = m; i <= n; i++) {
//     const current = i;
//     if (isPrime(current)) {
//       if (!prev) {
//         currentGap = 0
//         prev = current
//       }
//       if (currentGap === g) {
//         console.log(prev, current, currentGap)
//         return [prev, current]
//       }
//       currentGap = 0
//       prev = current
//     }
//     currentGap++
//   }
//   return null
// }

// const isPrime = (number) => {
//   if (number === 1) return false
//   if (number === 2) return true
//   for (let i = 2; i < number - 1; i++) {
//     const current = i
//     if (number % current === 0) {
//       return false
//     }
//   }
//   return true
// }


// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript
// generate hashtag

// function generateHashtag (str) {
//   if (str.length < 1) return false
//   const array = str.split(" ")
//   const noSpace = array.filter((word) => word !== "")
//   if (noSpace.length < 1) return false 
//   const upperArray = noSpace.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   })
//   return `#${upperArray.join('')}`.length < 141 ? `#${upperArray.join('')}` : false

// }
function generateHashtag(str) {
  if (str.length < 1) return false
  const array = str.split(" ").filter((word) => word !== "")
  if (array.length < 1) return false
  const upperArray = array.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return `#${upperArray.join('')}`.length < 141 ? `#${upperArray.join('')}` : false

}


// validate password

function validate(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

// sudoku https://www.codewars.com/kata/540afbe2dc9f615d5e000425/train/javascript

var Sudoku = function (data) {
  //   Private methods
  // -------------------------



  //   Public methods
  // -------------------------
  return {
    isValid: function () {
      // YOUR SOLUTION
      if (!validRows(data)) return false
      if (!validBlocks(data)) return false
      if (!validColumns(data)) return false

      return true;
    }
  };
};

const validRows = (data) => {

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const rowSet = new Set(row.map((number, j) => {
      return number
    }))
    if (rowSet.size !== row.length) {
      return false
    }

  }
  return true
}

const validBlocks = (data) => {

  const blocks = []

  blocks.push(new Set([
    data[0][0], data[0][1], data[0][2],
    data[1][0], data[1][1], data[1][2],
    data[2][0], data[2][1], data[2][2],
  ]))

  blocks.push(new Set([
    data[0][3], data[0][4], data[0][5],
    data[1][3], data[1][4], data[1][5],
    data[2][3], data[2][4], data[2][5],
  ]))
  blocks.push(new Set([
    data[0][6], data[0][7], data[0][8],
    data[1][6], data[1][7], data[1][8],
    data[2][6], data[2][7], data[2][8],
  ]))

  blocks.push(new Set([
    data[3][0], data[3][1], data[3][2],
    data[4][0], data[4][1], data[4][2],
    data[5][0], data[5][1], data[5][2],
  ]))

  blocks.push(new Set([
    data[3][3], data[3][4], data[3][5],
    data[4][3], data[4][4], data[4][5],
    data[5][3], data[5][4], data[5][5],
  ]))
  blocks.push(new Set([
    data[3][6], data[3][7], data[3][8],
    data[4][6], data[4][7], data[4][8],
    data[5][6], data[5][7], data[5][8],
  ]))
  //bottom row
  blocks.push(new Set([
    data[6][0], data[6][1], data[6][2],
    data[7][0], data[7][1], data[7][2],
    data[8][0], data[8][1], data[8][2],
  ]))
  blocks.push(new Set([
    data[6][3], data[6][4], data[6][5],
    data[7][3], data[7][4], data[7][5],
    data[8][3], data[8][4], data[8][5],
  ]))
  blocks.push(new Set([
    data[6][6], data[6][7], data[6][8],
    data[7][6], data[7][7], data[7][8],
    data[8][6], data[8][7], data[8][8],
  ]))

  for (let i = 0; i < blocks.length; i++) {
    const element = blocks[i];
    if (element.size !== 9) {
      return false
    }
    
  }

  return true
  
  

  
  
 
  console.log(blocks);


}

const validColumns = (data) => {
  const columnZero = new Set()
  const columnOne = new Set()
  const columnTwo = new Set()
  const columnThree = new Set()
  const columnFour = new Set()
  const columnFive = new Set()
  const columnSix = new Set()
  const columnSeven = new Set()
  const columnEight = new Set()

  for (let i = 0; i < data.length; i++) {
    const column = data[i];
    columnZero.add(column[0])
    columnOne.add(column[1])
    columnTwo.add(column[2])
    columnThree.add(column[3])
    columnFour.add(column[4])
    columnFive.add(column[5])
    columnSix.add(column[6])
    columnSeven.add(column[7])
    columnEight.add(column[8])
  }

  const columns = [columnZero, columnOne, columnTwo, columnThree, columnFour, columnFive, columnSix, columnSeven,columnEight  ]

  for (let i = 0; i < columns.length; i++) {
    const element = columns[i];
    if (element.size !== 9) {
      return false
    }
    
  }

  return true
    
  
}

console.log(
validColumns([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4]
]))