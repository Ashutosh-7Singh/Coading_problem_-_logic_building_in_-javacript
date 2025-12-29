function rightTrainagleRight(n){
    for (let row=1;row<=n;row++){
        let str= "";
        let space=n-row
        // print space
        for(let col=1;col<=space;col++){
            str += " ";
        }
        // print star
        for(let col=1;col<=row;col++){
            str += "*"
        }
        console.log(str)
    }
}

rightTrainagleRight(10)