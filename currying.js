// const ADD = a => b => c => a+b+c;

function ADD(a){
    return function (b){
        return function (c){
            return a+b+c;        
        }
    }
}

console.log(ADD(1)(2)(3));