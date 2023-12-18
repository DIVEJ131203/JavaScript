//Question 1
function vowelCount(String)
{   let count=0;
    for(const char of String)
    {
        if(char==="A"||char==="I"||char==="E"||char==="O"||char==="U"||char==="a"||char==="i"||char==="e"||char==="o"||char==="u")
        {
            count++;
        }
    }
    console.log(count);
}

//Question 2 using arrow =>
const countvow =(String)=>
//syntax
{
    count=0;
    for(const char of String)
    {
        if(char==="A"||char==="I"||char==="E"||char==="O"||char==="U"||char==="a"||char==="i"||char==="e"||char==="o"||char==="u")
        {
            count++;
        }
    }
    console.log(count);
}