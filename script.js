const numbers = [
  67, 105, 154, 594, 162, 711, 146, 457, 743, 729, 44, 372, 23, 583, 780, 111,
  555, 668, 7, 646, 570, 684, 56, 10, 781, 231, 165, 774, 648, 309, 94, 770,
  192, 230, 219, 399, 607, 401, 40, 631, 71, 178, 550, 545, 571, 376, 471, 196,
  437, 218, 454, 789, 52, 122, 447, 216, 170, 704, 606, 266, 669, 768, 171, 234,
  332, 392, 657, 703, 690, 53, 758, 349, 548, 214, 327, 747, 51, 119, 57, 316,
  773, 765, 156, 625, 11, 24, 615, 331, 386, 353, 785, 500, 640, 448, 435, 86,
  723, 223, 120, 444, 315, 130, 790, 612, 748, 433, 663, 206, 553, 272, 702,
  796, 767, 335, 633, 561, 359, 515, 152, 340, 161, 258, 738, 34, 177, 496, 257,
  213, 310, 608, 139, 467, 145, 504, 757, 709, 439, 326, 212, 338, 794, 299,
  118, 489, 134, 93, 220, 595, 317, 308, 280, 527, 136, 716, 582, 474, 188, 463,
  204, 586, 712, 370, 701, 364, 662, 190, 622, 251, 671, 296, 167, 348, 753,
  563, 733, 28, 38, 647, 759, 108, 389, 269, 731, 685, 185, 198, 352, 311, 756,
  632, 200, 244, 112, 725, 516, 35, 346, 540, 347, 320,
];

const myChart = document.getElementById('chart');
const selectionBtn = document.querySelector('#selection');
const bubbleBtn = document.querySelector('#bubble');
const insertionBtn = document.querySelector('#insertion');
const quickBtn = document.querySelector('#quick');

const renderChart = (numbers) => {
  numbers.forEach((number) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${number/2}px`;
    myChart.append(bar);
  });
};

renderChart(numbers);

//Selection

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

//Bubble

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

//Insertion

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

//Quick

const swap = (items, leftIndex, rightIndex) => {
  const tmp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = tmp;
};
const partition = (items, left, right) => {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
};

const quickSort = (items, left, right) => {
  setTimeout(() => {
    myChart.innerHTML = '';
    renderChart(numbers);
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }, 100);
};

selectionBtn.addEventListener('click', () => sortSelection(numbers));
bubbleBtn.addEventListener('click', () => sortBubble(numbers));
insertionBtn.addEventListener('click', () => sortInsertion(numbers));
quickBtn.addEventListener('click', () =>
  quickSort(numbers, 0, numbers.length - 1)
);
