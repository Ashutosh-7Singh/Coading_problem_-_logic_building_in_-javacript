function upper(n) {
    let rows = (n - 1) / 2;
    for (let row = 1; row <= rows; row++) {
        let str = "";

        let leftStar = row;
        for (let i = 1; i <= leftStar; i++) {
            str += "*";
        }

        let space = n - 2 * row;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }

        let rightStars = row;
        for (let k = 1; k <= rightStars; k++) {
            str += "*";
        }

        console.log(str);
    }
}

function middle(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += "*";
    }
    console.log(str);
}

function lower(n) {
    let rows = (n - 1) / 2;
    for (let row = 1; row <= rows; row++) {
        let str = "";

        let leftStar = rows - row + 1;
        for (let i = 1; i <= leftStar; i++) {
            str += "*";
        }

        let space = 2 * row - 1;
        for (let j = 1; j <= space; j++) {
            str += " ";
        }

        let rightStars = rows - row + 1;
        for (let k = 1; k <= rightStars; k++) {
            str += "*";
        }

        console.log(str);
    }
}

upper(5);
middle(5);
lower(5);
