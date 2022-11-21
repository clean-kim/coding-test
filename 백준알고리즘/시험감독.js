// 총 N개의 시험장이 있고, 각각의 시험장마다 응시자들이 있다. i번 시험장에 있는 응시자의 수는 Ai명이다.
// 감독관은 총감독관과 부감독관으로 두 종류가 있다. 총감독관은 한 시험장에서 감시할 수 있는 응시자의 수가 B명이고,
// 부감독관은 한 시험장에서 감시할 수 있는 응시자의 수가 C명이다.
// 각각의 시험장에 총감독관은 오직 1명만 있어야 하고, 부감독관은 여러 명 있어도 된다.
// 각 시험장마다 응시생들을 모두 감시해야 한다. 이때, 필요한 감독관 수의 최솟값을 구하는 프로그램을 작성하시오.

function essentialAdminNum(arr) {
    let a = arr[0]; 	// 시험장 수
    let b = arr[2][0];	// 총감독관 감시자 수
    let c = arr[2][1];	// 부감독관 감시자 수
    let res;
    let remainder = 0;
    let subAdmin = 0;

    for(let i = 0; i < a; i++) {
        remainder = Number(arr[1][i]-b);
        if(remainder >= c) {
            let t = 0;
            t += Number(Math.floor(remainder/c));
            t += Number(remainder%c);
            subAdmin += t;
        } else {
            subAdmin++;
        }
    }
    res = Number(subAdmin) + Number(a);
    return res;
}

let arr1 = [
    [3],
    [3,4,5],
    [2,2]
];

let arr2 = [
    [5],
    [10,9,10,9,10],
    [7,20]
];

let arr3 = [
    [5],
    [10,9,10,9,10],
    [7,2]
];

console.log(essentialAdminNum(arr3));