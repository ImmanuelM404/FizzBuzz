for( let i= 1; i < 50; i++){
    if ( i % 3 === 0){
    console.log('Fizz')
} else if (i % 5 === 0){
    console.log('buzz')
} else if (i % 5 === 0 && i % 3 === 0){
    console.log('FizzBuzz')
} else { 
    console.log(i)
}
}

