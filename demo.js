
function demo(name){
    // let a=5;
    // while(typeof name!='string' && a<0){
    //     console.log('enter valid name');
    //     a--;
    //    // break;
    // }
    if(typeof name=='string'){
    console.log(name);
    }
    else{
        console.log('invalid name format');
    }

}
demo('roh');
demo(1);