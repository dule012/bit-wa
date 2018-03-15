const os = require('os')
let callbackVar = [];

const lowMemory = () => {
    const osFreeMemory = os.freemem() / 1024 / 1024 / 1024;

    if (osFreeMemory < 1) {
        for (let i = 0; i < callbackVar.length; i++) {
            callbackVar[i](`Too low memory, your memory: ${osFreeMemory}`);
        }
    } else {
        console.log(`Memory is good and is: ${osFreeMemory}`);
    }
    setTimeout(()=>{
        clearInterval(clear)
    },3000)
}




const RegisterForAlerts = (callback) => {
    callbackVar.push(callback);
}

setInterval(lowMemory, 1000);

const clear = setInterval(lowMemory, 1000);


module.exports = RegisterForAlerts;
