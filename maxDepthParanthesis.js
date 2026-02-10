const maxDepth = (str) => {
    let depth = 0; 
    let max = 0;
    for(let ch of str)
    {
        if(ch == "(")
        {
            depth++;
            max = Math.max(depth,max);
        }
        else if(ch == ")")
        {
            depth--;
        }
    }
    return max;
}


const str = "(1)+((2))+((((3))))";
console.log(maxDepth(str));