const binarySearch = (nums,find) =>{
        let low = 0;
        let high = nums.length -1;
        
        while(low<=high)
        {
            let middle = Math.floor((low + high) / 2);
            let value = nums[middle];
            console.log("middle:",value)

            if(value<find) low = middle+1;
            else if(value>find) high = middle-1;
            else return middle;
        }
    return -1;
}
let nums = [1,2,3,4,5,6,7,8,9,10,11];
let find = 1;

const result = binarySearch(nums,find);

if(result==-1){
    console.log("No match found");
}
else{
    console.log("Match found at position :",result+1);
}