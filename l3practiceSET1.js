//print all no. 0 to 100
for(let i=0;i<=100;i++)
{
    console.log(i);
}
//print all even no. 0 to 100
for(let i=0;i<=100;i++)
{
    if(i%2==0)
    console.log(i);
}
//create a guessing number game
let game=5;
let user=prompt("enter a number");
while(user!=game)
{
user = prompt("wrong number guess again");
}
console.log("U entered  correct number");