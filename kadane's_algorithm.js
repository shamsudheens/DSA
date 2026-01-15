const maximumSumOfSubArray = (arr) =>{
    let max = -Infinity ;
    let sum = 0 ;
    let start;
    let arrStart;
    let arrEnd
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(sum == 0)
        {
            start = i;
        }

        sum = sum + arr[i];
        
        if(sum > max)
        {
            max = sum;
            arrStart = start;
            arrEnd = i;
        }

        if(sum < 0)
        {
            sum = 0;
        }
    }
    return{
        max:max,
        subArray:arr.slice(arrStart,arrEnd+1)
    }
}


const arr = [-2, -3, 4, -1, -2, 1, 5, -3]

const result = maximumSumOfSubArray(arr);

console.log("Maximum Sum :",result.max)
console.log("SubArray :",result.subArray);