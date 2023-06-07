const removeFromArray = function(arr, ...letters) {
    const newArray = [];

    arr.forEach((item) => {
        if (!letters.includes(item)) {
          newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
