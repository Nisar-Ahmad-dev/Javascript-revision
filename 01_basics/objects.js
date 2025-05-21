/*
In javaScript an object is an unordered collection of key value pairs. Each Key-value pair is called a property.
The key of a property can be string. The value of a property can be any value,
e.g: a sting, a number, an array, and even a function
the following example creates an empty object using the object literl notation:
*/

let empty = {};
console.log('type of empty: ' + typeof(empty));

/*
To create an object with properties, you use the key:value  within the curly braces.

*/

let person = {
    firstName: 'jhon',
    secondName: 'Doe'
};


// console.log(person.firstName);

let address = {
    'building no': 223,
    street:'North Ist street',
    state: 'Ca',
    country: 'USA'
};
  // to add property to object 
  address.destrict = 'New York';


  // to remove property from object

  delete address.destrict;
// console.log(address['building no']);
console.log('Ca' in address);
// console.log(address);


