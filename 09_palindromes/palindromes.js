const palindromes = function (arr) {
    arr = arr.split('');
    arr.forEach( element,index => {
        if(element == '!' || element == '?' || element == '.' || element == ' '|| element == ',')
        {
            arr = arr.splice(index, 1);
        }
    });

    rra = arr.reverse();
    arr = arr.reduce((sum, current) => sum + current,'');

    rra = rra.reduce((sum, current) => sum + current, '');


    rra = rra.toLowerCase();

    arr = arr.toLowerCase();

    console.log(arr);

    console.log(rra);
    if(arr === rra)
    {
        return true;
    }
    else
    {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
