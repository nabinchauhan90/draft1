apple = ['Apple','No Apple','Yes Apple']
banana = {
    'Yo':'What up',
    'Yo Yo':34,
    'Yo Boolean':true
}
console.log('Logged From Imported Module:',banana);
// module.exports = apple;
module.exports = {
    array1:apple,
    array2:banana
}