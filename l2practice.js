let a=5;
let b=3;
//basic arithmetic operators
console.log("a=",a ,"& b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a**b=",a**b);
console.log("a%b=",a%b);
console.log("a/b=",a/b);
console.log("a=",++a ,"&b=",++b);
console.log("a=",--a ,"&b=",--b);
console.log("a=",--a ,"&b=",--b);
a+=4;
b+=3;
console.log("a=",a ,"& b=",b);
//comparison operators
console.log("5==2",a==b);
console.log("5!=2",a!=b);
console.log("5<=2",a<=b);
console.log("5>=2",a>=b);
console.log("5===2",a===b);
//equal to and same type
console.log("5!==2",a!==b);
//equal to and not same type
//logical operator
let cond1=a>b;
let cond2=a<b;
console.log("cond1 && cond2",cond1 && cond2);
console.log("cond1 || cond2",cond1 || cond2);
// let color;
// if(mode==="dark-mode"){
// color:"black";
// }
let age=17;
if(age>18)
{
    console.log("you can vote");
}
if(age<18)
{
    console.log("wait till you are 18")
}
let mode="dark";
let color;
if(mode=="dark")
{
color:"black";
}
if(mode=="white")
{
    color:"white";
}
console.log(color);