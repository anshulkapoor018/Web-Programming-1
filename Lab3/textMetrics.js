async function createMetrics(text){
    text = text.toLowerCase();
    var newText = text;
    var totalVowels = 0;
    var totalConsonants = 0;
    var uniqueWordsDict = {};
    var averageWordLength = 0;
    var longWords = 0;
    newText = newText.replace(/(\\r|\\n|\\t|\s)/gm,"");
    var lettersOnly = '';
    for (var i = 0; i < newText.length; i++) {
        if (newText[i] >= 'A' && newText[i] <= 'Z' || newText[i] >= 'a' && newText[i] <= 'z') {
            lettersOnly += newText[i];
            if (newText[i].match(/[aeiouAEIOU]/)){
                totalVowels += 1;
            } else {
                totalConsonants += 1;
            }
        }
    }
    var onlyWords = text.replace(/[0-9]/g, '');
    var onlyWords = onlyWords.replace(/[\r\n]+/gm, " ");
    onlyWords = onlyWords.replace(/[^a-zA-Z ]/g, " ");
    onlyWords = onlyWords.replace(/ +(?= )/g,'').trim();
    var words = onlyWords.split(" ");

    for (var i = 0; i < words.length; i++) {
        var data = words[i];
        averageWordLength += data.length;
        if (data.length >= 6) {
            longWords += 1;
        }

        if (!uniqueWordsDict[data]) {
            uniqueWordsDict[data] = 0;
        }
        uniqueWordsDict[data] += 1;
    }
    
    const totalLetters = lettersOnly.length;
    const totalNonLetters = (text.replace(/[a-z]/gi, '')).length;
    const totalWords = words.length
    const uniqueWords = (Object.keys(uniqueWordsDict)).length;
    averageWordLength = averageWordLength / totalWords;

    var result = {
        totalLetters: totalLetters,
        totalNonLetters: totalNonLetters,
        totalWords: totalWords,
        totalVowels: totalVowels,
        totalConsonants: totalConsonants,
        uniqueWords: uniqueWords,
        longWords: longWords,
        averageWordLength: averageWordLength,
        wordOccurrences: uniqueWordsDict
    }
    return result;
}

module.exports = {createMetrics};
