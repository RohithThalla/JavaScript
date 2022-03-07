var circle={
    radius:1,
    draw(){
        console.log('draw');
    }
}


//old method using enumerate
let another={};
for(let key in circle){
    another[key]=circle[key];
}
console.log(another);
console.log('------------');


//using Object.assign
let another1=Object.assign({},circle);
console.log(another1);
another1.draw();
console.log('------------');


//object already having property
let another2=Object.assign({
    price:200,
    color:'red'
},circle);
console.log(another2);
console.log('------------');


//using spread... operator  
let another3={...circle};
console.log(another3)
another3.draw();