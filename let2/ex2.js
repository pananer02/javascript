function equation(text){
    total = 0;
    for( i = 0 ; i < text.length; i++){  //0 <  7     1 < 7     3 < 7     5 < 7    7 < 7 != True
        if(i == 0){
            total = parseInt(text[i]);  //total = 2
        }
        if(text[i] == "+"){
            i++;    // 4
            num = parseInt(text[i]);  // num = 1
            total += num;  //4 + 1 = 5
        }
        if(text[i] == "-"){
            i++;   // 6
            num = parseInt(text[i]);  // num = 3
            total -= num;  // 5 - 3 = 2
        }   
        if(text[i] == "*"){
            i++;    // 2
            num = parseInt(text[i]);  // num = 2
            total *= num;   // 2*2 = 4
        }
    }
    return total;
}

                    //0123456
console.log(equation("2*2+1-3"));