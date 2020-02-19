/*
if statement: 100% same with java
ternary: 100% same with java
switch statement: 85% same with java
*/


if(9 > 10){
    console.log("Hello");
}else if(11 > 12){
    console.log("NiHao");
}else{
    console.log("Hola");
}

//converts in to ternary same proces like java

var str = (9 > 10) ? "Hello" : (11 > 12 ) ? "NiHao" : "Hola";

console.log(str);

//in java switch statement doesn't accepte boolean, Long, Float, Double
// but JS every data type is ecepted

var bool = 5.5;
switch(bool){   // accepts any data type
   case true:
        console.log("true");
        break;
    case 5.5: 
        console.log("False");
        break;
    default:
        console.log("Maybe");  
}