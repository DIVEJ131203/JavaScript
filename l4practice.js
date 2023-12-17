//in js we can have array of asimilar type(string and int in same array but its not a good practice)
let marks1=[97,82,"divej","ahuja",98]
console.log(marks1);
//array of numbers
let marks=[97,82,83,57,98]
console.log(marks);
//array of strings
let names=["divej","reeva","anjali","manoj","Ayanika"]
console.log(name);
//strings are not mutable arrays are mutable
//mutable means editing based on index
//we can edit array acc. to particular index but we can't edit string in similar fashion

//loops in array
//for loop
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
}
for(let i=0;i<marks1.length;i++)
{
    console.log(marks1[i]);
}
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}
//for of loop
for(let mark of marks)
{
    console.log(marks);
}
for(let mark1 of marks1)
{
    console.log(mark1);
}
for(let name of names)
{
    console.log(name);
}
//to string
console.log(marks.toString());
    console.log(names.toString());
    console.log(marks1.toString());
    //concat
    let total=marks.concat(marks1);
    console.log(total);
    marks.unshift("Divej");
    console.log(marks);
    let val=marks.shift();
    console.log(marks);
    //slice and splice
    let avl1= marks.slice(1,4);
    console.log(avl1);
    marks.splice(2,2,101,102,103,104);