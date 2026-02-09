// const wordReverse = (sentence) => {
//     let result = [];
//     let currentWord = '';
//     for(let i = 0 ; i <= sentence.length ; i++)
//     {
//         if(sentence[i]==='' || i == sentence.length)
//         {
//             result.push(currentWord.split('').reverse().join(''));
//             currentWord = "";
//         }
//         else
//         {
//             currentWord += sentence[i];
//         }
//     }
//     return result.join('');
// }

const wordReverse = (sentence) => {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const sentence = "hi iam pro";
console.log(wordReverse(sentence));