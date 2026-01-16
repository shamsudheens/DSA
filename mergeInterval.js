const mergeInterval = (arr)=>{
    arr.sort((a,b)=>a[0]-b[0]);
    const result = [arr[0]];

    for(let i = 1 ; i < arr.length ; i++)
    {
        let last = result[result.length-1];
        let current = arr[i];
        
        if(current[0] <= last[1])
        {
            last[1] = Math.max(current[1],last[1]);
        }
        else
        {
            result.push(current);
        }
    }
    return result;
}


const arr = [[1,3],[2,6],[8,10],[15,18]];
console.log(mergeInterval(arr));