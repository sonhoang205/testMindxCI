
let A1 = [1,2,3,4];
let A2 = [3,4,5];

let result = [];
;
console.log(A1.split(','));

A1.forEach(keyA1 => {
    // console.log(keyA1);

    for (const keyA2 of A2) {
        if(keyA1 !== keyA2){
            result.push(keyA1)
            result.push(keyA2)
        }
    }
});
console.log(result);