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