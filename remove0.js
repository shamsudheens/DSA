const remove0 = (arr)=>{
    return arr.filter((e)=>{
        return e!==0;
    })
}

const arr = [1,2,0,3,4,0,7,6,0]

console.log(remove0(arr));