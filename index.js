// Code your solution here
['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    return drivers.filter(function(driverName){
        return driverName.toLowerCase() === name.toLowerCase();
    });
}


function fuzzyMatch(drivers, letter){
    return drivers.filter(function(driverName){
        return driverName[0] === letter;
    })
}


function matchName(drivers, name) {
    return drivers.filter(function(details){
        return details.name === name
    })
}
