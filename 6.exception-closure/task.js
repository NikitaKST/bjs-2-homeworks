//TASK 1
function parseCount(value) {
    let result = Number.parseFloat(value);
    if (isNaN(result)) {
        throw new Error('Невалидное значение');    
    }  
    return result;
}

// console.log(parseCount('3215'));

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

console.log(validateCount(10));

//TASK 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;                
        this.b = b;  
        this.c = c;
        this.validateTriangle(); // Проверка на существование треугольника                 
    }

    validateTriangle() {
        if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    //Периметр
    get perimeter() {
        return this.a + this.b + this.c;    
    }

    //Площадь
    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(area.toFixed(3)); // Округляем до трех знаков после запятой
    }

}

function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        },
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        }
      };
    }
  }

const triangle = new Triangle(
    2,
    5,
    5
);

console.log(triangle);
console.log(triangle.perimeter);
console.log(triangle.area);