/**
 * justify a given line as an array and return a justified text
 * @param {string[]} currentLine - the line split as words
 * @param {number} lineLength
 * @returns {string} - The justified line as text
 */
const justifyLine = (currentLine: string[], lineLength: number) => {
    const totalWordsLength = currentLine.reduce((acc, word) => acc + word.length, 0);
    let spaceToDistribute = lineLength - totalWordsLength;

    if (currentLine.length === 1) return currentLine[0].padEnd(lineLength);

    const spaceBetweenWords = Math.floor(spaceToDistribute / (currentLine.length - 1));
    const padding = spaceToDistribute % (currentLine.length - 1);
    let line = currentLine[0];

    for (let i = 1; i < currentLine.length; i++) {
        const spaces = spaceBetweenWords + (i - 1 < padding ? 1 : 0);
        line += ' '.repeat(spaces) + currentLine[i];
    }

    return line;
};

/**
 * justify a given text to have 80 chars per line
 * @param {string} text - The given text
 * @returns {string}- the justified text
 */
module.exports.justify = (text: string) => {
    const lineLength = 80;
    const paragraphs = text.split('\n').filter(line => line.trim() !== '');
    let justifiedText: string[] = [];

    paragraphs.forEach(paragraph => {
        const words = paragraph.split(' ');
        let currentLine: string[] = [];

        words.forEach(word => {
            const currentLineLength: number = currentLine.join(' ').length;

            if (currentLineLength + word.length + 1 <= lineLength) {
                currentLine.push(word);
            } else {
                justifiedText.push(justifyLine(currentLine, lineLength));
                currentLine = [word];
            }
        });

        if (currentLine.length > 0) justifiedText.push(currentLine.join(' '));
    });

    return justifiedText.join('\n');
};

/**
 * Calculate the number of words in a given text
 * @param {string} text
 * @returns {number} - The number of words
 */
module.exports.countWords = (text: string) => {
    return text.trim().split(' ').length;
};