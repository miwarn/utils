
function randomCharacter(characterClass) {
    const characterClasses = {
        c: Array.from('bcdfghjklmnpqrstvwxz'),
        C: Array.from('BCDFGHJKLMNPQRSTVWXZ'),
        v: Array.from('aeiouy'),
        V: Array.from('AEIUY'),
        d: Array.from('0123456789')
    }
    const a = characterClasses[characterClass]
    return a[Math.floor(Math.random() * a.length)];
}

function randomId(pattern) {
    let id = ''
    for (const characterClass of pattern) id += randomCharacter(characterClass)
    return id;
}

console.log(randomId('CvcvcvddVcvc'))