var circle={
    radius:1,
    draw(){
        console.log('draw');
    }
};
//for in
for(let key in circle ){

    console.log(key,circle[key]);
}
//for of key and value as string array
for(let key of Object.entries(circle)){
    console.log(key);
}
// for of keys
for(let key of Object.keys(circle)){
    console.log(key);
}

//in - check any property if present or not

if('draw' in circle){
    console.log('yes');
}
