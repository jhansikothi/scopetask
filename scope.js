/*Block scope:Accessing only within the block where it is defined*/
{
    var a=100;
    const c=200;
    console.log(a)
}
/*Global scope:Global scope is accessible everywhere in the code*/
var A=10;
let A1=200;
{
    let A1=200
    console.log(A+A1)
}
/*function scope:Accessible only within the function*/
function A22(){
    let a1=200;
    const a2=100;
    console.log(a1+a2)

}
A22()
