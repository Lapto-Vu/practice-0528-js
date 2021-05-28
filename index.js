const comparison = [2, 1, 3, 4, 5, 6, 8, 74, 74, 88, 88, 88, 98, 100, 100, 100];
const babel = [];
let kit = 0;
let simbol = 0;
let upNumber = 0;


while ( upNumber < 101 ) {

    simbol = 0;
    upNumber++;
    kit = comparison.indexOf(upNumber)
    
    while (kit !== -1) {

        simbol++;
        kit = comparison.indexOf(upNumber, kit+1);

    }
    
    if (simbol > 1 ) { 

        babel.push(simbol);

    }
}

if (babel.length < 1) {
    
    babel.push(-1);
}

console.log(babel);

// 중복되는 숫자가 있다면, 그 숫자가 얼마큼 있는지 세서 배열 안에 집어 넣는다.
// [2, 1, 3, 4, 5, 6, 8, 74, 74, 88, 88, 88, 98, 100, 100, 100] => [2, 3, 3] 
// 중복되는 숫자가 없다면, -1 을 리턴한다.
// [3, 4, 1, 2, 34, 14, 6, 36, 97] => [-1]