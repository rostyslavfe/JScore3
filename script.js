let getArea = function(radius){
    if(radius == Number(radius)){
        return ((Math.PI.toFixed(2))*Math.pow(radius, 2)); 
    }
    else if(typeof radius === 'string'){
        return 'Повинно бути числове значення'
    }
    else if(getArea(typeof radius === 'undefined')){
        return 'Будь ласка, введіть радіус!'
    }
};

console.log(getArea());


function getSqrt(number){
    if(number>0){
        return (Math.sqrt(number))
    }
    else if(typeof number === 'string'){
        return 'Повинно бути числове значення'
    }
    else if(number<0){
        return 'Введіть додатнє число'
    }
    else if(getSqrt(typeof number === 'undefined')){
        return 'Будь ласка, введіть число!'
    }
};

console.log(getSqrt());

const Pi = Number((355/113).toFixed(6));
let myMath = {
    PI: Pi,
    pow(num, degree){
        if(Number.isFinite(num) === true && Number.isFinite(degree) === true){
            return num**degree
        }
        else if(typeof num === 'string' || typeof degree === 'string'){
            return 'Повинно бути числове значення'
        }
        else if(typeof num === 'undefined' || typeof degree === 'undefined'){
            return 'Будь ласка, введіть число і ступінь'
        }
    },
    abs(num){
        if (num>0){
            return num
        }
        else if(num<0){
            return -num
        }
        else if(typeof num === 'string'){
            return 'Повинно бути числове значення'
        }
        else if(typeof num === 'undefined'){
            return 'Будь ласка, введіть число'
        }
    },
    max(...arg){
        let maxi = arg[0];
        for(let i = 0; i<arg.length; i++){
            if(maxi<arg[i]){
                maxi = arg[i]
            }
            else if(arg[i] === arg[i].toString()){
                maxi = 'Повинно бути числове значення'
            };
        }
        if(arg.length === 0){
            maxi = 'Будь ласка, введіть число';
        }
        return maxi;
    },
    min(...arg){
        let mini = arg[0];
        for(let j = 0; j<arg.length; j++){
            if(mini>arg[j]){
                mini = arg[j]
            }
            else if(arg[j] === arg[j].toString()){
                mini = 'Повинно бути числове значення'
            };
        }
        if(arg.length === 0){
            mini = 'Будь ласка, введіть число';
        }
        return mini
    }
};

console.log(myMath.pow());
console.log(myMath.abs());
console.log(myMath.max());
console.log(myMath.min());