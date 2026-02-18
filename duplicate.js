// const duplicate = (arr) =>{
//     return arr.filter((e,index,arr)=>{
//         return arr.indexOf(e) !== index;
//     })
// }

// const findDuplicate = (arr) => {
//   return arr.filter((v, i, a) => a.indexOf(v) !== i)[0];
// };

// const Duplicate = (arr) => {
//   const seen = new Set();
//   const duplicates = new Set();

//   for (let num of arr) {
//     if (seen.has(num)) {
//       duplicates.add(num);
//     } else {
//       seen.add(num);
//     }
//   }

//   return [...duplicates];
// };

// const arr = [1,3,4,2,2,3];
// console.log(duplicate(arr))
// console.log(Duplicate(arr))
// console.log(findDuplicate(arr))


const duplicate =(arr)=>{
  const seen = new Set();
  const dupli = new Set();

  for(let nums of arr)
  {
    if(seen.has(nums))
    {
      dupli.add(nums);
    }
    else
    {
      seen.add(nums);
    }
  }
  return{
    unique:[...seen],
    dup:[...dupli]
  }
}

const arr = [1,3,4,2,2,3];
const res = duplicate(arr);
console.log("unique: ",res.unique);
console.log("duplicate: ",res.dup)``