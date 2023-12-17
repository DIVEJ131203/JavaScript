let arr=[85,97,44,37,76,60];
let sum=0;
//1st way
sum=arr[0]+arr[1]+arr[2]+arr[3]+arr[4];
avg=sum/5;
console.log(avg);
//2nd way
let sum1=0;
for(let i=0;i<5;i++)
{
    sum1+=arr[i];
}
let average=sum/5;
console.log(average);
//2nd question
//10% discount on items
let arr1=[250,645,300,900,50];
for(let i=0;i<5;i++)
{
    arr1[i]=arr1[i]*.9;
}
console.log(arr1);