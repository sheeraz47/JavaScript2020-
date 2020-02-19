// Just provide function and method name to creating a method in JS
 

function addTwoNum(num1, num2){
    console.log(num1 + num2);
}

addTwoNum(10, 20);

function reverseSTR(str){
    if(typeof str == "string"){
    var result = "";
    for(var i = str.length; i >= 0; i--){
        result = result.concat(str.charAt(i));
    }
    console.log(result);
}else{
    console.log("no string is given");
}
}

reverseSTR("Sheeraz");

//typeof: returns the data type name
var num1 ="Cybertek";
console.log(typeof num1);

var bool2 = true;
console.log(typeof bool2);


console.log("========================");

function MultiplyTwoNum(num1, num2){
var result = num1*num2;
return result;
}
var total = MultiplyTwoNum(10, 20);
console.log(total);


