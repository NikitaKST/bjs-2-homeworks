// //Задача 1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// console.log(getArrayParams(-9, 5, 8));

/*
function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

console.log(getArrayParams(-9, 5, 8));
*/

//Задача 2.1

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  
  return sum;
}

//Задача 2.2
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;

  return difference;
}

//Задача 2.3
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0; // Сумма четных элементов
  let sumOddElement = 0; // Сумма нечетных элементов

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i]; 
    }
  }

  return sumEvenElement - sumOddElement; 
}

/*function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0; // Сумма четных элементов
  let sumOddElement = 0; // Сумма нечетных элементов

  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? (sumEvenElement += arr[i]) : (sumOddElement += arr[i]);
  }

  return sumEvenElement - sumOddElement - ; // Возвращаем разницу между суммой нечетных и суммой четных элементов
}
*/

//Задача 2.4
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement +=1; 
    }
  }

  return sumEvenElement / countEvenElement; 

}

//Задача 3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
      
  for (let i = 0; i < arrOfArr.length; i++) {
    const maxFunctionResult = func(...arrOfArr[i]);
    
    if (maxFunctionResult > maxWorkerResult) {
      maxWorkerResult = maxFunctionResult;
    }
  }

  return maxWorkerResult;
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

makeWork(arr, summElementsWorker);

