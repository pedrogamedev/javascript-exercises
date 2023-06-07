const repeatString = function(string, loops) {

    if(loops < 0)
    {
        return "ERROR";
    }
    let result = "";
    for(i = 0; i<loops; i++)
    {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
