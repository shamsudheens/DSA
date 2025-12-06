const search = (nums,find) =>{
    for(let i = 0 ; i < nums.length ; i++)
    {
        if(nums[i]==find)
        {
            return 1;
        }
    }
    return -1;
}



let nums = [1,2,3,4,5,6,7,8,9,10];
let find = 10;

const result = search(nums,find);

if(result==-1){
    console.log("No match found");
}
else{
    console.log("Match found");
}