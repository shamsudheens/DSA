const removeParanthesis = (str) => {
    let count = 0;
    let str2 = [];
    for(let ch of str)
    {
        if(ch=="(")
        {
            if(count>0)
            {
                str2.push(ch);
            }
            count++;
        }
        else
        {
            count--;
            if(count>0)
            {
                str2.push(ch);
            }
        }
    }
    return str2.join('');
}



const str = "(()())(())"
console.log(removeParanthesis(str))