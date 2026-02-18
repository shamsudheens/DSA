const binarySearch = (nums,find) => {
    let start = 0;
    let end = nums.length-1;

    while(start<=end){
        let middle = Math.floor((start+end)/2);
        if(find > nums[middle])
        {
            start = middle+1;
        }
        else if(find<nums[middle])
        {
            end = middle-1;
        }
        else
        {
            return middle;
        }
    }
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