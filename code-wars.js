

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
function pickPeaks(arr) {
  const answers = { pos: [], peaks: [] }
  if (arr.length < 3) return answers

  let i = 0
  let j = 1
  let k = 2

  while (i < arr.length) {
    let left = arr[i]
    let center = arr[j]
    let right = arr[k]
    if (center > left && center > right) {
      answers.pos.push(j)
      answers.peaks.push(center)
    }

    if (center === right && center > left) {
      while (arr[j] === arr[k]) {
        k++
      }
      if (arr[j] > arr[i] && arr[j] > arr[k]) {
        answers.pos.push(j)
        answers.peaks.push(arr[j])
      }
      j = k - 1
      i = k - 2
    }

    i++
    j++
    k++
  }

  return answers
}

pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3])

