// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Turn string to array
//loop through the array
//Repeat Each Element Once
//Return the array Into String 

//split     map     repeat      join

function doubleChar(str) {
    return str.split('').map((el) => el.repeat(2)).join('');
    
}


  console.log(doubleChar("doae"));