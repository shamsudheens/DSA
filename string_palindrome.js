const stringPalindrome = (str) =>{
    let rev = str.split('').reverse().join('');
    if(str == rev)
    {
        return true
    }
    else
    {
        return false
    }
} 

const str = "riyas";
console.log(stringPalindrome(str))
