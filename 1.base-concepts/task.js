'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }
  
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number"
  ) {
    return false;
  }

  percent = percent / 100; // Преобразование процентной ставки в десятичную форму
  let loanAmount = amount - contribution; // Тело кредита
  let monthlyInterest = percent / 12; // Месячная процентная ставка

  let monthlyPayment =
    loanAmount *
    (monthlyInterest +
      monthlyInterest / (Math.pow(1 + monthlyInterest, countMonths) - 1));
  
  let totalPayment = monthlyPayment * countMonths; // Общая сумма выплат
  totalPayment = Math.round(totalPayment * 100) / 100; // Округление до двух значений после запятой

  return totalPayment;
}

