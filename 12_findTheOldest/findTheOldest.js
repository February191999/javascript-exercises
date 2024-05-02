const findTheOldest = function(people) {
    

    return people.reduce((previousPerson, currentPerson) => {

        let previousPersonAge = getAge(previousPerson.yearOfBirth, previousPerson.yearOfDeath);

        let currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        if (previousPersonAge > currentPersonAge) {
            return previousPerson;
        } else {
            return currentPerson;
        }

    });
};

function getAge(birthYear, deathYear) {

    if (deathYear === undefined) {
        deathYear = new Date().getFullYear();
    } 
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
