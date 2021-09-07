const numbers = [
  339, 118, 110, 443, 5, 196, 453, 58, 496, 81, 258, 74, 322, 281, 7, 338, 22,
  164, 259, 206, 248, 167, 57, 233, 219, 297, 410, 217, 127, 103, 266, 105, 489,
  279, 465, 97, 404, 162, 152, 336, 418, 228, 129, 179, 178, 21, 137, 116, 82,
  318, 216, 203, 500, 361, 490, 440, 371, 446, 287, 186, 163, 247, 43, 264, 355,
  145, 308, 100, 232, 464, 211, 123, 267, 316, 180, 69, 95, 54, 416, 183, 71,
  251, 200, 209, 324, 46, 334, 389, 313, 283, 111, 456, 102, 91, 288, 48, 432,
  31, 497, 169,
];

const myChart = document.getElementById('chart');
const selectionBtn = document.querySelector('#selection');
const bubbleBtn = document.querySelector('#bubble');
const insertionBtn = document.querySelector('#insertion');
const clock = document.querySelector('.clock');


const renderChart = (numbers) => {
  numbers.forEach((number) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${number}px`;
    myChart.append(bar);
  });
};

renderChart(numbers);

const sortSelection = (numbers, startIndex = 0) => {
  setTimeout(() => {
    myChart.innerHTML = '';
    renderChart(numbers);
    let tmp;
    for (let i = startIndex; i < numbers.length; i++) {
      if (numbers[i] < numbers[startIndex]) {
        tmp = numbers[startIndex];
        numbers[startIndex] = numbers[i];
        numbers[i] = tmp;
      }
    }
    if (startIndex < numbers.length) {
      sortSelection(numbers, startIndex + 1);
    }
  }, 100);
};

const sortBubble = (numbers, endIndex = numbers.length - 1) => {
  setTimeout(() => {
    myChart.innerHTML = '';
    renderChart(numbers);
    let tmp;
    for (let i = 0; i < endIndex; i++) {
      if (numbers[i] > numbers[i + 1]) {
        tmp = numbers[i + 1];
        numbers[i + 1] = numbers[i];
        numbers[i] = tmp;
      }
    }
    if (endIndex >= 1) {
      sortBubble(numbers, endIndex - 1);
    }
  }, 100);
};

const sortInsertion = (numbers) => {
  let key, j;
  for (let i = 1; i < numbers.length; i++) {
    setTimeout(() => {
      key = numbers[i];
      j = i - 1;
      while (j >= 0 && numbers[j] > key) {
        numbers[j + 1] = numbers[j];
        j--;
      }
      numbers[j + 1] = key;
      myChart.innerHTML = '';
      renderChart(numbers);
    }, 100);
  }
};

// const sortMerge = (numbers) => {
//   const merge = (left, right) => {
//     let arr = [];

//     while (left.length && right.length) {
//       arr.push(left[0] < right[0] ? left.shift() : right.shift());
//       setTimeout(() => {
//         myChart.innerHTML = '';
//         renderChart(arr);
//       }, 1000);
//     }
//     return [...arr, ...left, ...right];
//   };

//   const mergeSort = (array) => {
//     if (array.length < 2) return array;

//     const half = Math.floor(array.length / 2);

//     const left = array.slice(0, half);
//     const right = array.slice(half, array.length);
//     const sortLeft = mergeSort(left);
//     const sortRight = mergeSort(right);
//     return merge(sortLeft, sortRight);
//   };

//   mergeSort(numbers);
// };

selectionBtn.addEventListener('click', () => sortSelection(numbers));
bubbleBtn.addEventListener('click', () => sortBubble(numbers));
insertionBtn.addEventListener('click', () => sortInsertion(numbers));

