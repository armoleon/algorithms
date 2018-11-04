console.clear;

function isModeZero(number, mod) {
    return number%mod==0;
}

for (i = 1; i <= 100; i++) {
    if(isModeZero(i,15)){
        console.log('FizzBuzz');
    }else if(isModeZero(i,3)){
        console.log('Fizz');
    }else if(isModeZero(i,5)){
        console.log('Buzz');
    }else{
        console.log(i);
    }    
}

console.log('\n' + 'Alternatively'+ '\n');

function isBuzzyFizzy(i,mod, word) {
    return isModeZero(i,mod)?word:'';
}

for (i = 1; i <= 100; i++) {
    var output= isBuzzyFizzy(i,3,'Fizz') + isBuzzyFizzy(i,5,'Buzz');
    console.log(output!=''?output:i);    
}