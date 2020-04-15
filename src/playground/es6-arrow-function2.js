// argument objects - no longer bound with arrow functions in es6

const add = (a,b) => {
    return a  + b;
}; 

console.log(add(5, 5));

// this keyword - no longer bound in es6

const user = {
    name: 'Diego',
    cities: ['Brisbane','Bogota'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    multiplyBy: 2,
    numbers: [1,2,3],
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy)
    }
};

console.log(multiplier.multiply());