const maximumProductofSubArray =(arr)=>{
    let max = -Infinity;
    let pre = 1;
    let suf = 1;

    for(let i = 0 ; i < arr.length ; i++)
    {
        if(pre == 0) pre = 1;
        if(suf == 0) suf = 1;

        pre = pre * arr[i];
        suf = suf * arr[arr.length - i - 1];
        max = Math.max(max,Math.max(suf,pre));
    }
    return max;
}

const arr = [2,3,0,-2,-2,4];
const result = maximumProductofSubArray(arr);
console.log("maximum product is :",result);