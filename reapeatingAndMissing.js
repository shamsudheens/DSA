const repeatingandMissing = (arr) =>{
    let repeat = -1;
    let missing = -1;

    for(let i = 1 ; i <= arr.length ; i++)
    {
        let count = 0;
        for(let j = 0; j < arr.length ; j++){
            if(arr[j] == i)
            {
                count++;
            }
        }
        if(count == 0)
        {
            missing = i;
        }
        if(count > 1)
        {
            repeat = i;
        }
        if(missing !== -1 && repeat !== -1)
        {
            break;
        }
    }
    return {repeat,missing,}
}

const arr = [1,3,3,5,4];
const result = repeatingandMissing(arr);

console.log("repeating element is :",result.repeat)
console.log("missing element is :",result.missing)