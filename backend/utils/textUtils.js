module.exports.justify = (text) => {
    const lineLength = 80;
    const words = text.split(' ');

    let justifiedText = [];
    let currentLine = [];

    words.forEach(word => {
        const currentLineLength = currentLine.join(' ').length;

        if (currentLineLength + word.length + 1 <= lineLength) {
            currentLine.push(word);
        } else {
            justifiedText.push(currentLine.join(' '));
            currentLine = [word];
        }
    });

    if (currentLine.length > 0) {
        justifiedText.push(currentLine.join(' '));
    }

    console.log(justifiedText.filter(item => item.length >0))

    return justifiedText.join('\n');
};

module.exports.countWords = (text) => {
    return text.trim().split(' ').length;
}