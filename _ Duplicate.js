const removeDuplicate = (nums) => {
    return nums.map((val,index,arr)=>{
        return arr.indexOf(val) !== index ? '_' : val;
    }).sort();
}


const nums = [1,4,2,2,4,5,7,6,7,4]
console.log(removeDuplicate(nums));
