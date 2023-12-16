//ques1
let num=prompt("Enter a number:");
if(num%5==0)
{
    console.log("Multiple of 5");
}
else
{
    console.log("not a multiple of 5 ");
}
//ques2
let grade=prompt("Enter your marks out of 100");

if(grade>=80 && grade<=100)
{
    console.log("A");
}
else if(grade>=70 && grade<=79)
{
    console.log("B");
}
else if(grade>=60 && grade<=69)
{
    console.log("C");
}
else if(grade>=50 && grade<=59)
{
    console.log("D");
}
else
{
    console.log("FAIL");
}