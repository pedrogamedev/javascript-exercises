const sumAll = function(start, finish) {

    if(start < 0 || finish < 0)
    {
        return "ERROR";
    }
    if(!Number.isInteger(start) || !Number.isInteger(finish))
    {
        return "ERROR";
    }
    let result = 0;


    if(start < finish)
    {
        for(i = start; i<= finish; i++)
        {
            result += i;
        }
    }
    else
    {
        for(i = finish; i<= start; i++)
        {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
