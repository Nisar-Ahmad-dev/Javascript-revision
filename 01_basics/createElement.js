
function createDiv(width= '100px', height = '100px',message= 'test', border = '2px solid black' ){
    let div = document.createElement('div');
    div.style.width = width;
    div.style.backgroundColor = 'red'
    div.style.height = height;
    div.style.border = border;
    div.innerText = message;
    document.body.appendChild(div);
    return div;
}


createDiv(width = '200px', height = '200px', message = 'inner text', border = '2px sold black');


function put(toy, toyBox = []) {
    toyBox.push(toy);
    return toyBox;
}

console.log(put('Toy Car'));
// -> ['Toy Car']
console.log(put('Teddy Bear'));
// -> ['Teddy Bear'], not ['Toy Car','Teddy Bear']