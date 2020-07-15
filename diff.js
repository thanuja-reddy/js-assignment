//DIFFERENCE BETWEEN var , let, const 
//using var keyword
var x=10;//here x is 10
{
    let x=2;//here x is 2
}

function myFunction()
{
    var carName="volvo";//we can use carName variable in thos block
}
//Here we can't access the carName variable out side the function

//USING let keyword
let i=5;
for(let i=0;i<10;i++)
{
    //here i value is 9
}//here i value is 5

{
    let a=10;
    console.log(a);
}//block1
{
    a++;
    console.log(a);
}//block2
/*Since we are using "let a=10",scope "a" is limited to block 1 and "a" is not recognized in block2*/

//USING const keyword
{
    const PI=3.14;
    console.log(PI);
}//block1
{
    console.log(PI);
}//block2
/*Since we are using "const PI=3.14",scope of PI is limited to block1*/