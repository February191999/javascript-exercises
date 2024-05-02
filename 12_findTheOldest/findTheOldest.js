const findTheOldest = function(people) {
    

    return people.reduce((previousPerson, currentPerson) => {
        let currentAge = person.yearOfDeath-person.yearOfDeathBirth;

        if (currentAge > previousAge) {
            return 1;
        } else {
            return -1;
        }

    }, {});
};

function getAge(birthYear, deathYear) {

    if (deathYear === undefined) {
        deathYear = new Date().getFullYear();
    } 
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
