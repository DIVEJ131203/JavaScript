let arr=["Bloomberg","Microsoft","uber","google","ibm","netflix"];
//remove 1st company using array methods
arr.shift();
console.log(arr);
//remove uber and add ola
arr.splice(2,1,"OLA");
//add amzon at end
arr.push("Amazon");