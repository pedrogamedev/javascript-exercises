const reverseString = function(string) {
    let str = string.split("");
    str = str.reverse();
    let result ="";
    str.forEach(element => {
        result += element;
    });
    return result;
};

// Do not edit below this line
module.exports = reverseString;
