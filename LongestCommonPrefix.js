const LCP = (arr) => {
    if(arr.length === 0) return "";

    for(let i = 0 ; i < arr[0].length ; i++)
    {
        for(let j = 1 ; j < arr.length ; j++)
        {
            if(arr[j][i] !== arr[0][i])
            {
                return arr[0].slice(0,i);
            }
        }
    }
}

const arr = ["flight","flow","flower"];
console.log(LCP(arr));