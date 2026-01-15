const secondLargest = (arr) =>{
    let largest = arr[0];
    let second = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>largest)
        {
            second = largest;
            largest= arr[i];
        }
        else if(arr[i]<largest && arr[i]>second)
        {
            second=arr[i]
        }
    }
    return second;
}

const arr = [1,2,4,6,2,8,1,19,10];

console.log(secondLargest(arr));