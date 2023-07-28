let products = [
    {label:'Product A', price:10, quantity:5},
    {label:'Product B', price:20, quantity:3},
    {label:'Product C', price:15, quantity:7},
    {label:'Product D', price:25, quantity:2},
    {label:'Product E', price:30, quantity:4}
];
for(let i = 0; i < products.length; i++){
    console.log(products[i].label + ': $' + products[i].price);
}

let minNumber = products[0]
;
//let i = 1;
while (i < products.length) {
    if(products[i] < minNumber){
        minNumber = products[i];
    }
  i++;
}
console.log('the cheapest price is:', minNumber);

let productsPrice = [10, 20, 15, 25, 30];
let sum = 0; 
for(let i = 0; i < productsPrice.length; i++){
    sum += productsPrice[i];
}
    console.log('Total value of all products is:' + sum);

   for(let index in products){
    console.log(products[index]);
   }

for(let i = 1; i <= 100; i++){
     if(i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
  }
    else if(i % 3 === 0){
        console.log('Fizz');
    }
    else if (i % 5 === 0){
        console.log('Buzz');
        }
   else{
    console.log(i);
    }
}
