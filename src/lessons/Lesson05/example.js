//Задача: вернуть новый массив, значением которого будут длины строк исходного массива
const numberArray = ['один',"два",'три',"четыре","пять"];

const newArray = numberArray.map((item)=> item.length);
console.log(newArray);
