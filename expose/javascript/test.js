let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() { 
        console.log('Hello!');
    },
    'Favorite Teacher':{
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

// console.log(student.name);
// console.log(student["Grad Year"]);
// student.greeting(); // call greeting function from student
// console.log(student["Favorite Teacher"].name);
// console.log(student.courseLoad[0]);

function sumValues(num1, num2, add) {
    if (add){
        var result = 0;
        result = num1 + num2;
        console.log('values added: ', result);
    }
    else {
        return;
    }
    console.log('final result: ', result);
}

// sumValues(10, 10, true);

function discountPrices(prices, discount) {
    var discounted = [];
    var length = prices.length;
    var finalPrice = 0;

    for (var i = 0; i < prices.length; i++) {
        var discountedPrice = prices[i] * (1 - discount);
        finalPrice = Math.round(discountedPrice * 100) / 100;
        discounted.push(finalPrice);
    }
    // console.log(i);
    // console.log(discountedPrice);
    console.log(finalPrice);
    // console.log(discounted);

    return discounted;
}

// discountPrices([100, 200, 300], 0.5);

function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]));
    }
    console.log(newArr);
    return newArr;
}

function doSomething(num) {
    console.log(num * 2);
    return num * 2;
}

// modifyArray([1,2,3], doSomething);

let d = new Date();
let time = d.toLocaleDateString();
// console.log(time);

function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 1000);
    console.log(4);
}

printNums();