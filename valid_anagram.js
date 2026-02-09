const anagram = (str1,str2) =>{
    if(str1.split('').sort().join('') == str2.split('').sort().join(''))
    {
        return true;
    }
    else
    {
        return false;
    }
}

const str1 = "hello";
const str2 = "lloeh";

console.log(anagram(str1,str2));