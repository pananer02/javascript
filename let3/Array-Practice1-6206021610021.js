let value1 = ['Apple' , 1 , false];
let value2 = ['Fries' , 2 , true];
let value3 = ['Mars' , 3 , 'Apple'];

function checkType(check1,check2){
    for(i = 0 ; i < check1.length ; i++){
        if(typeof check1[i] == typeof check2[i]){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
}
console.log("check value 1 and value 2");
checkType(value1,value2);
console.log("\ncheck value 2 and value 3");
checkType(value2,value3);
console.log("\ncheck value 1 and value 3");
checkType(value1,value3);