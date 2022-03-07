function circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}
var a=new circle(1);
console.log(a.radius);
a.draw();

// function circle(rad){
//     return{
//         rad,
//         draw(){
//             console.log('draw');
//         }
//     }
// }

// const c=circle(1);
// console.log(draw());

