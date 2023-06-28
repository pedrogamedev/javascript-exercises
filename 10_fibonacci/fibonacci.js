const fibonacci = function(n) {
    let result =1;
    let lastResult = 0;
    
    if(n <0)
    {
        return "OOPS";
    }
    if(n == 1)
    {
        return result;
    }
    for(i = 1; i< n; i++)
    {
        let tmp = result;
        result = lastResult + result;
        lastResult = tmp;
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
