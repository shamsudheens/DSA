const removeDuplicate = (arr) =>{
    return arr.filter((e,i,arr)=>{
        return arr.indexOf(e) === i;
    })
}

const duplicateCount = (arr)=>{
    return arr.filter((e,i,arr)=>{
        return arr.indexOf(e)!==i;
    })
}

const arr = [1,2,0,4,5,6,2,3,4,0,7,6,0]

console.log(removeDuplicate(arr));

console.log("duplicate count :",duplicateCount(arr).length);