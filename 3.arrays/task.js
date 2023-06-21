function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; 
      }  
        
     return arr1.every((element, index) => element === arr2[index]);
}

const people = [
    {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
    {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
    {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
    {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
    {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
    {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
    {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
    {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
    {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
    {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
    {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
    {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
    {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
    {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
  ]

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(gndr => gndr.gender === gender).map(ages => ages.age).reduce((acc, item, index, users) => {
      acc += item;
      if (index === users.length - 1) {
        return acc / users.length;  
      }
      return acc;

    }, 0);

    if (users.length === 0) {
      return 0;
    }
    
    // console.log(result);
    return result;
}

// let result = arr.filter(...).map(...).reduce(...)
// let result = arr.filter(...).reduce(...)

console.log(getUsersNamesInAgeRange(people, "мужской"));