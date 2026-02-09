const missing = (arr) => {
    const n = arr.length;
    let expectedSum = ((n+1)*(n+2))/2;
    
    let actualSum = 0;
    for(let num of arr)
    {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

const arr = [1,3,2,5];
console.log(missing(arr));