// const car = ['blue', 4000, 1989];
const arr = [];
arr.push('honda');

const car = {
    model: "Accord",
    colors: ['blue', 'red', 'pink'],
    mileage: 4000,
    year: 1989,
    isElectric: false
};

const m = 'mileage';
//console.log(arr[0]); // index
console.log(car.colors);
console.log(car.mileage);
console.log(car.year);
console.log(car.isElectric);
console.log(car[m]);

console.log('===========================');
const tesla = {
};

// tesla.model = 'X';
tesla.colors = ['white', 'black'];
tesla.mileage = 1000;
tesla.year = 2023;
tesla.isElectric = true;


if (tesla.model === undefined) {
    tesla.model = 'Y';
}

//* deleting a property
delete tesla.isElectric

console.log(tesla);
console.log(tesla.model);

//* For In Loop
for (let prop in tesla) {

    console.log(prop);
    console.log( tesla[prop] );


    if (prop === 'colors') {
        tesla[prop].forEach(function(color) {
            console.log(color);
        })


        for (let color of tesla[prop]) {
            console.log(color);
        }
    }
}

tesla.colors.forEach(function(color) {
    console.log(color);
});