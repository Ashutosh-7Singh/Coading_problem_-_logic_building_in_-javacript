function invertedLeftTriangle(n){
    for(let row=n;row>=1;row--){
        let str = "";
         for(let col= 1;col<row;col++){
            str += "*"
        }
        for(let space=1;space<=(n-row)*2;space++){
            str += " ";
        }

        for(let col= 1;col<row;col++){
            str += "*"
        }
        console.log(str)
    }
}

invertedLeftTriangle(10)