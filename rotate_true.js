const rotateTrue = (str,goal) => {
    if(str.length == goal.length && (str+str).includes(goal))
    {
        return true;
    }
    else
    {
        return false
    }
}

const str = "hello";
const goal = "elloh"

console.log(rotateTrue(str,goal));