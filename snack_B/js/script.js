const array = ['ciao', 2, true, 55, 'giovanni', 23];

function sumArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if( !(Number.isNaN( parseInt(array[i], 10)) ) ) {
            sum += array[i]
        }
    }
    console.log(sum)
}

sumArray(array);