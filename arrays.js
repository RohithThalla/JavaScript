//primitive arrays
var a=[1,2,3,4,-1];
console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[5]);

const gre=a.filter(i => i>0);//positive numbers
console.log(gre);

for (const key in a) {
    
        console.log(element=a[key]);
        
    
}
a.push(2,3);
console.log(a);
a.unshift(0,1);
console.log(a);
console.log(a.indexOf(1));
console.log(a.indexOf(1,a.indexOf(1)+1));//2nd occurance of 1
console.log(a.includes(3));

//reference types

const b=[
    {id:1,name:'a'},
    {id:2,name:'c'}
]
const k=b.find(i => i.name==='a');
console.log(k);
console.log(k.id);

const k1=b.findIndex(i => i.name==='c');
console.log(k1);

