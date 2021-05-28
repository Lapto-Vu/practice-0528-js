const comparison = [3, 3, 3, 6, 6, 6, 6, 7];
const babel = [];
let kit = 0;
let simbol = 0;
let upNumber = 0;


while ( upNumber < 11 ) {

    simbol = 0;
    upNumber++;
    kit = comparison.indexOf(upNumber)
    
    while (kit != -1) {

        simbol++;
        kit = comparison.indexOf(upNumber, kit+1);

    }
    
    if (simbol != 0 ) { 

        babel.push(simbol);

    }
}

console.log(babel);

// 숫자 3은 3번, 숫자 6은 4번, 숫자 7은 1번  이렇게 해서 -> [3,4,1] 출력