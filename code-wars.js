

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
  if (number < 100) return 0

  // check if number is in awesomePhrases
  if (awesomePhrases.includes(number)) return 2

  //check if number is approaching awesomePhrases
  if(awesomePhrases.length > 0){
    for (let i = 0; i < awesomePhrases.length; i++) {
      const element = awesomePhrases[i];
      if (element - 1 === number || element -2 === number) {
        return 1
      }
    }
  }

  const arrayNumber = number.toString().split('').map((num)=>parseInt(num))
  //check if digit followed by all zeros
  // const allZeros = checkForZeros(arrayNumber)
  // if (allZeros) return 2
  const zeros = checkForZeros(number)
  console.log(zeros);



 return 0
}

const checkForZeros = (number) => {
  const arrayNumber = number.toString().split('').map((num)=>parseInt(num))
  arrayNumber.shift()
  let checker = '1'
  for (let i = 0; i < arrayNumber.length; i++) {
    checker += '0'
  }
  if (number % parseInt(checker) === 0) {
    return 2
  }
  if ((number + 1) % parseInt(checker) === 0 || (number + 2) % parseInt(checker) === 0) {
    return 1
  }
}




console.log(isInteresting(1001, []));