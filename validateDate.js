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

function splitDate(date) {
    return date.split('-').map(e => Number(e))
}

function dateString(y, m, d) {
    return      String(y).padStart(4, '0') 
        + '-' + String(m).padStart(2, '0') 
        + '-' + String(d).padStart(2, '0')
}

function dayAfter(date) {
    const [y, m, d] = splitDate(date)
    if (!checkDate(y, m, d)) return ''
    if (d < lastDayOfMonth(y, m)) return dateString(y, m, d + 1)
    else if (m < 12) return dateString(y, m + 1, d - lastDayOfMonth(y, m) + 1)
    else return dateString(y+1, 1, 1)
}

function dayBefore(date) {
    const [y, m, d] = parseDateString(date)
    if (!checkDate(y, m, d)) return ''
    if (d > 1) return dateString(y, m, d-1)
    else if (m > 1) return dateString(y, m-1, lastDayOfMonth(m-1))
    else return dateString(y-1, 12, 31)
}

for (let d = '2021-01-01'; d<'2022-01-01'; d = dayAfter(d)) {
    console.log(d)
}
