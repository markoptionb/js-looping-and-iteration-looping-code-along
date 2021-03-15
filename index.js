// Code your solutions in this file
const arr1 = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(arr1){
    let arr2 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr2.push (`Thank you, ${arr1[i]}, for the wonderful surprise gift!`);
    }
    return arr2
};

let f = 10;
function countDown(f){
    while (f >= 0)
        console.log(f--); 
};
