//use function for single parameters

// function message(arrg) {
//     return console.log(arrg);
// }

// message('Welcome To javascript Function')

// use function for 2 parameters

// function add(x , y){
//     return console.log(x + y);
// }

// add(12,12);

// function add(){
//     let sum = 0;
//     for(let i = 0 ; i < arguments.length; i++ ){
//          sum += arguments[i];
//     }
//     return console.log(sum);
// }


// add(1,2,3);

//Multiply all arguments together.
function Multiply(){
    let total = 1;
    for(let i = 0 ; i < arguments.length; i++ ){
         total *= arguments[i];
    }
    return console.log(total);
}


// Multiply(3,3);
//Return the maximum number.
function maximum (...args){
    return console.log(Math.max(...args) );
}


// maximum (1,13,13);



function average (){
    let total = 0;
    for(let i = 0 ; i < arguments.length; i++ ){
         total += arguments[i];
    }
    return console.log(total / arguments.length);
}
// average(1,2,3,4,5,6,7,8)

// function countDown(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         countDown(nextNumber);
//     }
// }
// countDown(3);

function createDiv(height = '100px', width = '100px', border = 'solid 1px red') {
    let div = document.createElement('div');
    div.style.height = height;
    div.style.width = width;
    div.style.border = border;
    document.body.appendChild(div);
    return div;
}

createDiv()