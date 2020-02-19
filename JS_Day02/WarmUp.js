/*
WarmUp:
    1. Write a function for the palindrome test. 
        if the string is plaindrome ==> return true
        otherwise ==> return false
            
    2. write a function  that can remove the duplicated values from string of text
*/
function plainDromeTest(str){
    var result = "";
    if(typeof str == "string"){
    
        for(var i = str.length -1 ; i >= 0; i-- ){
            result = result.concat(str.charAt(i)); // concat is same like (+=)
        }
        
        if(result == str){
            return true;
        }
    }
    return false;
}
    console.log( plainDromeTest("anastas mum satsana") );//true
    console.log( plainDromeTest("Cybertek") );//false
    console.log(plainDromeTest(123));//false


console.log("===============================================");
// "AAABBBCCC" ==> "ABC"

function RemoveDuplicates(str){
    var nonDupliacte = "";

    if(typeof str == "string"){
        for(var i = 0; i < str.length; i++){
            if(!nonDupliacte.includes(str.charAt(i))){ // includes is same like contains
                 nonDupliacte += str.charAt(i);
            }
         }
    }
   console.log(nonDupliacte);
}

RemoveDuplicates("AABBBCCCDDDD");
