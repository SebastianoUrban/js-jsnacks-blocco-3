const array1 = [];
const array2 = [];

const maxLength = 10;

//array 1
const randomNum1 = Math.floor(Math.random() * maxLength + 1);
for (let i  = 0; i < randomNum1; i++){
    array1.push(0);
}
console.log('Before array1 --> ' + array1.length)

//array 2
const randomNum2 = Math.floor(Math.random() * maxLength + 1);
for (let i  = 0; i < randomNum2; i++){
    array2.push(0);
}
console.log('Before array2 --> ' + array2.length)

while(array1.length != array2.length){
    if(array1.length > array2.length){
        array2.push(0);
    } else {
        array1.push(0);
    }
}
console.log('After array1 --> ' + array1.length)
console.log('After array1 --> ' + array2.length)
