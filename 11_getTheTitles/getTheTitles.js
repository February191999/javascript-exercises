const getTheTitles = function(books) {
    let titleArray = []

    books.map(book => titleArray.push(book.title));

    return titleArray;

};

// Do not edit below this line
module.exports = getTheTitles;
