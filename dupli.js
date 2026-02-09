const duplicate = (arr) =>{
    let seen = new Set();
    let dupli = new Set();

    for(let num of arr){
        if(seen.has(num)){
            dupli.add(num)
        }
        else
        {
            seen.add(num);
        }
    }
    return [...dupli]
}

const arr = [1,3,4,4,2,2,3];
console.log(duplicate(arr));
