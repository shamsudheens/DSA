const remove0 = (arr)=>{
    return arr.sort((a,b)=>a-b).reverse();
}

const arr = [1,2,0,3,4,0,7,6,0]

console.log(remove0(arr));