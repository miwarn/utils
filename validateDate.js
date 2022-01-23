function isLeapYear(y) {
    return ((y % 100 == 0 && y % 400 == 0) || (y % 100 != 0 && y % 4 == 0))
}

function lastDayOfMonth(y, m) {
    switch (m) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: return 31;
        case 2: return isLeapYear(y) ? 29 : 28;
        case 4: case 6: case 9: case 11: return 30;
        default: return 0;
    }
}

function checkDate(y, m, d) {
    return (d >= 1 && d <= lastDayOfMonth(y, m))
}

console.log(checkDate(1900, 2, 29))