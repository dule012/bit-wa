const loremIpsum = require('lorem-ipsum');

const loremWords = ((number) => {
    return loremIpsum({
        units: 'words',
        count: number
    })
});

const loremSentences = ((number) => {
    return loremIpsum({
        units: 'sentences',
        count: number
    })
})

class Lorem {
    constructor(title, content) {
        this.id = Math.floor(9 * Math.random() + 1);
        this.title = title;
        this.content = content;
    }
}

const createLorem = (number) => {
    const arr = [];
    
    for (let i = 0; i < number; i++) {
        arr.push(new Lorem(loremWords(3), loremSentences(2)))
    }
    
    return arr;
}

module.exports = createLorem;