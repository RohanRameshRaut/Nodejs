function isDateValid(dateStr)
{
    return !isNaN(new Date(dateStr));
}

// DD/MM/YYYY
console.log(isDateValid("15/05/2019")); // FALSE

// MM/DD/YYYY
console.log(isDateValid("05/15/2019")); // TRUE

// YYYY/MM/DD
console.log(isDateValid("2019/05/15")); // TRUE