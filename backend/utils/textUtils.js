const justifyLine = (currentLine, lineLength) => {
    const totalWordsLength = currentLine.reduce((acc, word) => acc + word.length, 0);
    let spaceToDistribute = lineLength - totalWordsLength;

    if (currentLine.length === 1) {
        return currentLine[0].padEnd(lineLength);
    }

    const spaceBetweenWords = Math.floor(spaceToDistribute / (currentLine.length - 1));
    const padding = spaceToDistribute % (currentLine.length - 1);

    let line = currentLine[0];

    for (let i = 1; i < currentLine.length; i++) {
        const spaces = spaceBetweenWords + (i - 1 < padding ? 1 : 0);
        line += ' '.repeat(spaces) + currentLine[i];
    }

    return line;
};

module.exports.justify = (text) => {
    const lineLength = 80;

    const paragraphs = text.split('\n').filter(line => line.trim() !== '');
    let justifiedText = [];

    paragraphs.forEach(paragraph => {
        const words = paragraph.split(' ');
        let currentLine = [];

        words.forEach(word => {
            const currentLineLength = currentLine.join(' ').length;

            if (currentLineLength + word.length + 1 <= lineLength) {
                currentLine.push(word);
            } else {
                justifiedText.push(justifyLine(currentLine, lineLength));
                currentLine = [word];
            }
        });

        if (currentLine.length > 0) {
            justifiedText.push(currentLine.join(' '));
        }
    });

    return justifiedText.join('\n');
};

module.exports.countWords = (text) => {
    return text.trim().split(' ').length;
};