let furniture = ['Table' , 'Chairs' , 'Couch'];

function iterator(text){
    for(i = 0 ; i < text.length ; i++){
        for (let char of text[i]) {
     // triggers 4 times: once for each character
        console.log( char ); // t, then e, then s, then t
        }
        console.log("");
    }
}

iterator(furniture);