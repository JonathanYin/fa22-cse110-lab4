function sumValues(num1, num2, add){
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

    for (var i = 0; i < prices.length; i++){
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

discountPrices([100, 200, 300], 0.5);