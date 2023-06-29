const findTheOldest = function(arr) {
    let oldestAge = 0;
    let curAge = 0;
    let oldestPerson;

    let date = new Date().getFullYear()
    arr.forEach(element => {
        if(element.yearOfDeath != undefined)
        {
            curAge = element.yearOfDeath - element.yearOfBirth;
        }
        else
        {
            curAge = date - element.yearOfBirth;
        }
        console.log(curAge);
        if(curAge > oldestAge)
        {
            oldestPerson = element;
            oldestAge = curAge;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
