const square = function (x){
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrow2 = (x) => x * x;

console.log(squareArrow(8));


const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};

console.log(getFirstName('Diego Torres'));

const getFirstName2 = (fullName) => fullName.split(" ")[0];

console.log(getFirstName2("Andres Suarez"));