

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



const isInteresting = (number, awesomePhrases) => {
  if (number === 98 || number === 99) return 1
  if (number < 100) return 0
  const arrayNumber = number.toString().split('').map((num) => parseInt(num))

  // check if number is in awesomePhrases
  if (awesomePhrases.includes(number)) return 2

  //check if number is approaching awesomePhrases
  if (awesomePhrases.length > 0) {
    for (let i = 0; i < awesomePhrases.length; i++) {
      const element = awesomePhrases[i];
      if (element - 1 === number || element - 2 === number) {
        return 1
      }
    }
  }

  // check if all trailing zeros
  // const zeros = checkForZeros(arrayNumber, number)
  // if (zeros === 1 || zeros === 2 ) return zeros
  if(checkForZeros(number)) return 2
  if(checkForSameNumber(number)) return 2
  if(checkIncrementing(number)) return 2
  if(checkDecrementing(number)) return 2
  if(checkPalendrome(number)) return 2






  if(checkForZeros(number + 1)) return 1
  if(checkForZeros(number + 2)) return 1

  //check for repeating numbers
  
  if(checkForSameNumber(number + 1)) return 1
  if(checkForSameNumber(number + 2)) return 1

  //check for incrementing
  
  if(checkIncrementing(number + 1)) return 1
  if(checkIncrementing(number + 2)) return 1

  //check for decrementing
  
  if(checkDecrementing(number + 1)) return 1
  if(checkDecrementing(number + 2)) return 1

  //check palendrom
  
  if(checkPalendrome(number + 1)) return 1
  if(checkPalendrome(number + 2)) return 1
  



  return 0
}

const checkForZeros = (number) => {
  const arrayNumber = number.toString().split('').map((num) => parseInt(num))
  let checker = '1'
  for (let i = 1; i < arrayNumber.length; i++) {
    checker += '0'
  }
  if (number % parseInt(checker) === 0) {
    return 2
  }
}

const checkForSameNumber = (number) => {
  const first = number % 10;
  while (number) {
    if (number % 10 !== first) return false;
    number = Math.floor(number / 10);
  }
  return true
}

const checkIncrementing = (number) => {
  const arrayNumber = number.toString().split('').map((num) => parseInt(num))
  for (let i = 0; i < arrayNumber.length; i++) {
    let num = arrayNumber[i];
    if(num === 0)arrayNumber[i] = 10
    
  }
  console.log(arrayNumber);

  let pointer = arrayNumber[0]
  for (let i = 1; i < arrayNumber.length; i++) {
    let current = arrayNumber[i];
    if (current !== (pointer + 1)){
      return false
    }
    pointer ++
  }
  return true
}

const checkDecrementing = (number) => {
  const arrayNumber = number.toString().split('').map((num) => parseInt(num))
  let pointer = arrayNumber[0]
  for (let i = 1; i < arrayNumber.length; i++) {
    const current = arrayNumber[i];
    if (current !== (pointer - 1)){
      return false
    }
    pointer --
  }
  return true
}

const checkPalendrome = (number) => {
  const arrayNumber = number.toString().split('').map((num) => parseInt(num))
  const reversed = [...arrayNumber].reverse()

  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] !== reversed[i]) return false
    
  }

  return true
}



console.log(isInteresting(7899, []));