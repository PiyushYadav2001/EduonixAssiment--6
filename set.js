//Question 2

// let array=[1,2,3,4,5,6,7,8,8,9,9,9,9];
// let set=new Set(array);

// set.forEach(e=>{
//     alert(e);
// })

//Question-4
let evenNum=new Set();
let oddNum=new Set();
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evenNum.add(i);
    } else {
        oddNum.add(i);
    }
}

let unionSet=new Set([...evenNum,...oddNum]);

let interSection=new Set([...evenNum].filter(num =>oddNum.has(num)));

let evenOnlySet = new Set(
    [...evenNum].filter(num => !oddNum.has(num))
);

const oddOnlySet = new Set(
    [...oddNum].filter(num => !evenNum.has(num))
);


console.log("Even Numbers Set:", evenNum);
console.log("Odd Numbers Set:", oddNum);
console.log("Union Set:", unionSet);
console.log("Intersection Set:", interSection);
console.log("Even Numbers Only Set:", evenOnlySet);
console.log("Odd Numbers Only Set:", oddOnlySet);