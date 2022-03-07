function greater(a,b,c){
  let k=a>b?(a>c?a:c):(b>c?b:c);
    return k;
}

// function greater(a,b,c){
//   if(typeof a=='number' && typeof b=='number' && typeof c=='number'){
//   var k=Math.max(a,b,c)
//   console.log(k);
//   }
//   else{
//     console.log('enter numbers only');
//   }
//   //return k;
// }
console.log(greater(12,34,22));
console.log(greater(0,0,0));
console.log(greater(1,2,3));
console.log(greater('a','b','c'));
console.log(greater('a',2,'z'));