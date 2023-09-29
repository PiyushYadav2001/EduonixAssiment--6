// let arr=[43,12,33,444,5,36,7,8,9,10]
// let key=7;
// let index=-1;
// let flag=false;
//     linar search


// for(let i=0; i<arr.length; i++){
//     if(arr[i] === key){
//         flag=true;
//         index=i;
//         break;
//     }
   
// }


// if(flag === true){
//     console.log(index)
// }else{
//     console.log(index);
// }

//binary
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let lb=0;
let ub=arr.length;
let mid=0;
let key=1;
let index=-1;
let flag=false;


while(lb<ub){
    mid=(lb+ub)/2;
    mid=parseInt(mid);

    if(arr[mid]===key){
        flag=true;
        index=mid;
         
        break;
    }else if(arr[mid]<key){
        lb=mid+1;
    }else{
     
        ub=mid-1;
    }
}

if(flag===true){
      console.log(`index is ${index}`)
}else{
    console.log(`Not Found index is ${index}`)
}