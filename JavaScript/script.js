// 1
// const a = prompt('please enter the value of A: ');
// const b = prompt('please enter the value of B: ');
// let result=a/b;
// let remainder=a%b
// console.log(result)
// console.log(remainder)
// 2
// let a = prompt('please enter the value of A: ');
// let b = prompt('please enter the value of B: ');
// let temp;


// temp = a;
// a = b;
// b = temp;


// console.log(`A: ${a}`);
// console.log(`B: ${b}`);
// 3
// const a = prompt('please enter the value of A: ');
// const b = prompt('please enter the value of B: ');
// const c = prompt('please enter the value of C: ');
// if (a!=0 && b!=0 && c!=0){
//     let x=(c-b)/a
//     console.log(x)
// }
// else{
//     console.log("Please enter a non-zero number!")
// }
// 4
// const a =Number(prompt('please enter the value of A: '));
// const b =Number(prompt('please enter the value of B: '));
// if(a>b){
//     result=a+b;
// }
// else if (a==b){
//     result=a*b;
// }
// else{
//     result=a-b;

// }
// console.log(result)
// 5
const a =Number(prompt('please enter the value of A: '));
const b =Number(prompt('please enter the value of B: '));
const c = Number(prompt('please enter the value of C: '));
var d=Math.pow(b,2)-4*a*c;
if(d>0){
    x1=(-b+Math.sqrt(d))/2*a;
    x1=(-b+Math.sqrt(d))/2*a;
    console.log(x1,x2)
}
else if(d==0){
    x=-b/2*a
    console.log(x)
}
    
else{
    console.log("The quadratic equation has no solution")
}

