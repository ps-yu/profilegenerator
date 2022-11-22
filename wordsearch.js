const wordSearch = (letters, word) => {
    if (word === "indefined"){
        return false;
    } 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let verticalArray = [];
    for (let i = 0; i < letters[0].length; i++){
        let word = "";
        for ( let j = 0; j < letters.length; j ++){
            word = word.concat(letters[j][i]);
        }verticalArray.push(word);        
    }
    for (l of verticalArray) {
        if (l.includes(word)) return true
    }
    return false;

}

module.exports = wordSearch