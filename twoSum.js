const twoSum = (arr,target) => {
    const map = new Map();

    for(let i = 0 ; i < arr.length ; i++)
    {
        const diff = target - arr[i];

        if(map.has(diff)){
            return [map.get(diff),i];
        }
        map.set(arr[i],i);
    }
    return false;
}


const arr = [2,7,15,3];
const target = 9;
console.log(twoSum(arr,target))