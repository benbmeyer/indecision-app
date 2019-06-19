const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
};

const squareArrow = (x) => x * x;

console.log(square(8));

const fullName = ('Ben Meyer')
const getFirstName = (fullName) => fullName.split(' ')[0];

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => number * this.multiplyBy); 
    }
};

console.log(mulitplier.multiply(2))
