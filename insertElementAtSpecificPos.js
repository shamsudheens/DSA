const insert = (arr,val) =>{
    const sortArr = arr.sort((a,b)=>a-b);
    const index = sortArr.indexOf(val);
    
    if(index !== -1)
    {
        return{
            array:sortArr,
            position:index,
        } 
    }

    sortArr.push(val);
    sortArr.sort((a,b)=>a-b);

    return{
            array:sortArr,
            position:sortArr.indexOf(val),
        } 
}

const arr = [1,2,0,4,5,6,2,3,4,0,7,6,0]
console.log(insert(arr,4))
console.log(insert(arr,10))
