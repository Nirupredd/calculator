console.log("hi what are doing")
const a=document.getElementById("result");
function appendToresult(input){
    a.value += input;
}
function calculate()
{
a.value=eval(a.value);
}
function clearresult()
{
    a.value=null;
}
