//console.log('Thalla Rohith');console.log(23);console.log(31101998)


function details(name,age,date,month,year){

if(typeof name=='string'){
   console.log(name);
}else{
    console.log("enter valid name");
}
if(typeof age=='number'){
   console.log(age);
}else{
    console.log("enter number");
}

if((typeof date=='number' && typeof month=='number' && typeof year=='number')){
console.log(`dob is ${date} - ${month} - ${year}`);  
}else{
    console.log("enter valid dob");

} 

}

details('Thalla Rohith',23,31,"a",1998);
console.log();
details('Thalla Rohith',23,31,10,1998);
console.log();
details(12,11,1,2,3000)
