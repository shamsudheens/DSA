const remove0 = (arr) =>{
    let pos = 0;
    for(let nums of arr)
    {
        if(nums!==0)
        {
            arr[pos]=nums;
            pos++
        }
    }
    while(pos<arr.length)
    {
        arr[pos]=0;
        pos++;
    }
    return arr;
}

const arr = [1,2,0,3,4,0,7,6,0]

console.log(remove0(arr));