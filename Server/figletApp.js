var figlet = require("figlet")
const getText = () => {
    return figlet.textSync('TASA', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    });
};

module.exports.getText = getText;