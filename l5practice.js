function myFuntion()
{
    console.log("HELLO!!!");
    console.log("I am Divej");
}
myFuntion();
myFuntion1();
function myFuntion1()
{
    console.log("HELLO!!!");
    console.log("I am learning JS");
}
//sum
function sum(x,y)
{
    s=x+y;
    return s;
}
let val=sum(50,78);
console.log(val);
//multiplication
function mul(z,w)
{
    return z*w;
}
let val1=mul(34,57)
console.log(val1);
//call-back
let arrs=[4,5,6];
arrs.forEach((arr)=>
{
    console.log(arr*arr);
});