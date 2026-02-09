var threeConsecutiveOdds = (arr) => {
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++)
    {
        if(arr[i]%2!==0)
        {
            count++;
        }
        else
        {
            count = 0;  
        }

        if(count == 3){
            return true
        }
    }
    return false
};

let arr = [1,2,34,3,4,5,7,23,12]
console.log(threeConsecutiveOdds(arr))